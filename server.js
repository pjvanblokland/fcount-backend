const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const http = require('http');
const socketIo = require('socket.io');

// Add global error handlers
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Don't exit the process, just log the error
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Don't exit the process, just log the error
});

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

// JSON file storage
const DATA_FILE = path.join(__dirname, 'datasets.json');

// Load data from JSON file on startup
function loadDataFromFile() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
            console.log('Data loaded from file:', Object.keys(data).length, 'datasets');
            return data;
        }
    } catch (error) {
        console.error('Error loading data from file:', error);
    }
    return {};
}

// Save data to JSON file (only for non-demo datasets)
function saveDataToFile() {
    try {
        // Convert datasets to simple objects for JSON storage
        // Exclude demo dataset 123446 from persistent storage
        const dataToSave = {};
        Object.keys(DATASET_LIST).forEach(id => {
            if (id !== '123446') { // Skip demo dataset
                const dataset = DATASET_LIST[id];
                dataToSave[id] = {
                    id: dataset.id,

                    aantallenf: dataset.aantallenf,
                    created: dataset.created
                };
            }
        });

        fs.writeFileSync(DATA_FILE, JSON.stringify(dataToSave, null, 2));
        console.log('Data saved to file:', Object.keys(dataToSave).length, 'datasets (123446 excluded)');
    } catch (error) {
        console.error('Error saving data to file:', error);
    }
}

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (simple frontend for viewing graphs)
app.use(express.static(path.join(__dirname)));

console.log("F-Count Backend Server starting...");

// Data storage - gebaseerd op je heroku implementatie
var DATASET_LIST = {};

// Load existing data from file on startup
DATASET_LIST = loadDataFromFile();

// Dataset constructor - aangepast van je heroku code
var Dataset = function (id) {
    var self = {};
    self.id = +id;

    self.aantallenf = new Array(50).fill(0);
    self.created = new Date();

    DATASET_LIST[id] = self;

    self.verwerk = function (aantalf) {
        if (aantalf >= 0 && aantalf < 50) {
            self.aantallenf[aantalf] += 1;
            console.log('Verwerk F-count:', self.id, 'aantal:', aantalf);
            // Auto-save after each data point (except demo dataset)
            if (id !== '123446') {
                saveDataToFile();
            }
        }
    };

    self.clear = function () {
        self.aantallenf = new Array(50).fill(0);
        console.log('Dataset cleared:', self.id);
        // Auto-save after clearing (except demo dataset)
        if (id !== '123446') {
            saveDataToFile();
        }
    };

    return self;
};

// Convert loaded data back to Dataset objects
function initializeLoadedDatasets() {
    const loadedData = DATASET_LIST;
    DATASET_LIST = {}; // Reset

    Object.keys(loadedData).forEach(id => {
        const data = loadedData[id];
        const dataset = new Dataset(data.id);
        dataset.aantallenf = data.aantallenf || new Array(50).fill(0);
        dataset.created = new Date(data.created) || new Date();
        console.log('Restored dataset:', id, 'with', dataset.aantallenf.reduce((a, b) => a + b, 0), 'total entries');
    });
}

// Initialize datasets from loaded data
if (Object.keys(DATASET_LIST).length > 0) {
    initializeLoadedDatasets();
}

// Always ensure demo dataset exists (temporary, non-persistent)
// Check if demo dataset exists and if it's older than 1 hour
if (DATASET_LIST['123446']) {
    const demo = DATASET_LIST['123446'];
    const now = new Date();
    const created = new Date(demo.created);
    const hoursSinceCreation = (now - created) / (1000 * 60 * 60);
    
    if (hoursSinceCreation > 1) {
        console.log(`Demo dataset 123446 is ${hoursSinceCreation.toFixed(1)} hours old - clearing it`);
        demo.clear();
        demo.created = now; // Reset creation time
    } else {
        console.log(`Demo dataset 123446 exists (${hoursSinceCreation.toFixed(1)} hours old) - keeping data`);
    }
} else {
    var demo = new Dataset(123446, '');
    console.log('Demo dataset 123446 initialized (temporary)');
}

// WebSocket connection handling
io.on('connection', (socket) => {
    console.log('🔌 Client connected:', socket.id);
    
    // Join dataset room for real-time updates
    socket.on('join-dataset', (dataset) => {
        socket.join(`dataset-${dataset}`);
        console.log(`📊 Client ${socket.id} joined dataset ${dataset}`);
    });
    
    // Leave dataset room
    socket.on('leave-dataset', (dataset) => {
        socket.leave(`dataset-${dataset}`);
        console.log(`👋 Client ${socket.id} left dataset ${dataset}`);
    });
    
    socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id);
    });
});

// Broadcast data update to all clients watching a dataset
function broadcastDataUpdate(datasetNumber, data) {
    io.to(`dataset-${datasetNumber}`).emit('data-update', {
        dataset: datasetNumber,
        data: data,
        timestamp: new Date().toISOString()
    });
    console.log(`📡 Broadcasted update for dataset ${datasetNumber}`);
}

// Routes

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date(),
        datasets: Object.keys(DATASET_LIST).length
    });
});

// Check if dataset exists
app.get('/bestaat', (req, res) => {
    const { nummer } = req.query;

    if (!nummer) {
        return res.status(400).json({ error: 'Number parameter is required' });
    }

    const exists = DATASET_LIST.hasOwnProperty(nummer);
    res.json({ exists });
});

// Store F-count data - hoofdfunctie voor je app
app.get('/geg', (req, res) => {
    const { number, aantalf } = req.query;

    if (!number || aantalf === undefined) {
        return res.status(400).json({ error: 'Number and aantalf parameters are required' });
    }

    const dataset = DATASET_LIST[number];
    if (!dataset) {
        // Auto-create dataset if it doesn't exist (for demo purposes)
        new Dataset(number, '');
    }

    const count = parseInt(aantalf, 10);
    if (!isNaN(count)) {
        DATASET_LIST[number].verwerk(count);
        
        // 🔥 NEW: Broadcast real-time update to all connected clients
        const datasetData = {
            id: DATASET_LIST[number].id,
            aantallenf: DATASET_LIST[number].aantallenf,
            created: DATASET_LIST[number].created
        };
        broadcastDataUpdate(number, datasetData);
    }

    res.json({
        success: true,
        message: 'Data stored successfully',
        count: count
    });
});

// Clear dataset
app.get('/clear', (req, res) => {
    const { number } = req.query;

    if (!number) {
        return res.status(400).json({ error: 'Number parameter is required' });
    }

    if (DATASET_LIST[number]) {
        DATASET_LIST[number].clear();
        
        // 🔥 NEW: Broadcast clear update to all connected clients
        const datasetData = {
            id: DATASET_LIST[number].id,
            aantallenf: DATASET_LIST[number].aantallenf,
            created: DATASET_LIST[number].created
        };
        broadcastDataUpdate(number, datasetData);
        
        res.json({ success: true, message: `Dataset ${number} cleared` });
    } else {
        res.status(404).json({ error: 'Dataset not found' });
    }
});

// Extended exists endpoint for dataset operations
app.get('/exists', (req, res) => {
    const { number, code } = req.query;

    if (!number) {
        return res.status(400).json({ error: 'Number parameter is required' });
    }

    const dataset = DATASET_LIST[number];
    const exists = !!dataset;

    let result = { exists };



    const codeNum = parseInt(code, 10);

    if (number === '123446') {
        switch (codeNum) {
            case 2: // new dataset
                if (!exists) {
                    new Dataset(number, cleanPassword);
                    result.created = true;
                }
                break;

            case 3: // clear dataset
                if (exists) {
                    dataset.clear();
                    result.cleared = true;
                }
                break;

            case 4: // delete dataset
                if (exists && number !== '123446') {
                    delete DATASET_LIST[number];
                    result.deleted = true;
                    // Auto-save after deletion (non-demo datasets only)
                    saveDataToFile();
                }
                break;
        }
    } else {
        switch (codeNum) {
            case 2: // new dataset
                if (!exists) {
                    new Dataset(number);
                        result.created = true;
                }
                break;

            case 3: // clear dataset
                if (exists) {
                    dataset.clear();
                    result.cleared = true;
                }
                break;

            case 4: // delete dataset
                if (exists && number !== '123446') {
                    delete DATASET_LIST[number];
                    result.deleted = true;
                    // Auto-save after deletion (non-demo datasets only)
                    saveDataToFile();
                }
                break;
        }
    }
    
    res.json(result);
});

// Get dataset statistics - voor grafieken
app.get('/stats', (req, res) => {
    const { dataset, language } = req.query;

    if (!dataset || !DATASET_LIST[dataset]) {
        return res.status(404).json({ error: 'Dataset not found' });
    }

    const data = DATASET_LIST[dataset];
    const counts = data.aantallenf;

    // Calculate statistics
    let total = 0;
    let sum = 0;
    const frequency = {};

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 0) {
            total += counts[i];
            sum += i * counts[i];
            frequency[i] = counts[i];
        }
    }

    const average = total > 0 ? sum / total : 0;

    res.json({
        dataset: dataset,
        total: total,
        average: Math.round(average * 100) / 100,
        frequency: frequency,
        aantallenf: counts
    });
});

// Error handling
app.use((error, req, res, next) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

server.listen(PORT, () => {
    console.log(`🚄 F-Count Railway Backend running on port ${PORT}`);
    console.log(`🔌 WebSocket server active for real-time updates`);
    console.log(`📊 Demo dataset 123446 initialized`);
});

module.exports = app;