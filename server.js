const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

console.log("F-Count Backend Server starting...");

// Data storage - gebaseerd op je heroku implementatie
var DATASET_LIST = {};

// Dataset constructor - aangepast van je heroku code
var Dataset = function (id, wachtwoord) {
    var self = {};
    self.id = +id;
    self.wachtwoord = wachtwoord;
    self.aantallenf = new Array(50).fill(0);
    self.created = new Date();
    
    DATASET_LIST[id] = self;
    
    self.verwerk = function (aantalf) {
        if (aantalf >= 0 && aantalf < 50) {
            self.aantallenf[aantalf] += 1;
            console.log('Verwerk F-count:', self.id, 'aantal:', aantalf);
        }
    };
    
    self.clear = function () {
        self.aantallenf = new Array(50).fill(0);
        console.log('Dataset cleared:', self.id);
    };
    
    return self;
};

// Initialize demo dataset
var demo = new Dataset(123446, '');

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
        res.json({ success: true, message: `Dataset ${number} cleared` });
    } else {
        res.status(404).json({ error: 'Dataset not found' });
    }
});

// Extended exists endpoint for dataset operations
app.get('/exists', (req, res) => {
    const { number, wachtwoord, code } = req.query;
    
    if (!number) {
        return res.status(400).json({ error: 'Number parameter is required' });
    }
    
    const dataset = DATASET_LIST[number];
    const exists = !!dataset;
    
    let result = { exists };
    
    if (wachtwoord !== undefined) {
        const cleanPassword = wachtwoord.replace(/"/g, '');
        result.wachtwoord = exists ? dataset.wachtwoord === cleanPassword : false;
        
        const codeNum = parseInt(code, 10);
        
        if (result.wachtwoord || number === '123446') {
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
                    }
                    break;
            }
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

app.listen(PORT, () => {
    console.log(`F-Count Backend Server running on port ${PORT}`);
    console.log(`Demo dataset 123446 initialized`);
});

module.exports = app;