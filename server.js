const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// In-memory data storage (in production, use a database)
let datasets = {};

// Helper function to initialize demo dataset
function initializeDemoData() {
    if (!datasets['123446']) {
        datasets['123446'] = {
            number: '123446',
            password: '',
            data: [],
            created: new Date()
        };
    }
}

// Initialize demo data
initializeDemoData();

// Routes

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Check if dataset exists
app.get('/bestaat', (req, res) => {
    const { nummer } = req.query;
    
    if (!nummer) {
        return res.status(400).json({ error: 'Number parameter is required' });
    }
    
    const exists = datasets.hasOwnProperty(nummer);
    res.json({ exists });
});

// More comprehensive exists endpoint with password verification
app.get('/exists', (req, res) => {
    const { number, wachtwoord, code } = req.query;
    
    if (!number) {
        return res.status(400).json({ error: 'Number parameter is required' });
    }
    
    const dataset = datasets[number];
    const exists = !!dataset;
    
    let result = { exists };
    
    if (exists && wachtwoord !== undefined) {
        // Check password (remove quotes if present)
        const cleanPassword = wachtwoord.replace(/"/g, '');
        result.wachtwoord = dataset.password === cleanPassword;
        
        // Handle different operations based on code
        const codeNum = parseInt(code, 10);
        
        if (result.wachtwoord) {
            switch (codeNum) {
                case 2: // new dataset
                    if (!exists) {
                        datasets[number] = {
                            number: number,
                            password: cleanPassword,
                            data: [],
                            created: new Date()
                        };
                        result.created = true;
                    }
                    break;
                    
                case 3: // clear dataset
                    if (exists) {
                        datasets[number].data = [];
                        result.cleared = true;
                    }
                    break;
                    
                case 4: // delete dataset
                    if (exists && number !== '123446') {
                        delete datasets[number];
                        result.deleted = true;
                    }
                    break;
            }
        }
    }
    
    res.json(result);
});

// Store F-count data
app.get('/geg', (req, res) => {
    const { number, aantalf } = req.query;
    
    if (!number || !aantalf) {
        return res.status(400).json({ error: 'Number and aantalf parameters are required' });
    }
    
    // Initialize dataset if it doesn't exist (for demo purposes)
    if (!datasets[number]) {
        datasets[number] = {
            number: number,
            password: '',
            data: [],
            created: new Date()
        };
    }
    
    // Add the F-count data
    datasets[number].data.push({
        count: parseInt(aantalf, 10),
        timestamp: new Date(),
        ip: req.ip || 'unknown'
    });
    
    res.json({ 
        success: true, 
        message: 'Data stored successfully',
        dataCount: datasets[number].data.length 
    });
});

// Clear dataset
app.get('/clear', (req, res) => {
    const { number } = req.query;
    
    if (!number) {
        return res.status(400).json({ error: 'Number parameter is required' });
    }
    
    if (datasets[number]) {
        datasets[number].data = [];
        res.json({ success: true, message: `Dataset ${number} cleared` });
    } else {
        res.status(404).json({ error: 'Dataset not found' });
    }
});

// Get dataset statistics (for viewing results)
app.get('/stats', (req, res) => {
    const { dataset, language } = req.query;
    
    if (!dataset || !datasets[dataset]) {
        return res.status(404).json({ error: 'Dataset not found' });
    }
    
    const data = datasets[dataset].data;
    
    // Calculate statistics
    const counts = data.map(entry => entry.count);
    const total = counts.length;
    const average = total > 0 ? counts.reduce((a, b) => a + b, 0) / total : 0;
    const sorted = [...counts].sort((a, b) => a - b);
    const median = total > 0 ? 
        (total % 2 === 0 ? 
            (sorted[total/2 - 1] + sorted[total/2]) / 2 : 
            sorted[Math.floor(total/2)]) : 0;
    
    // Count frequency of each answer
    const frequency = {};
    counts.forEach(count => {
        frequency[count] = (frequency[count] || 0) + 1;
    });
    
    res.json({
        dataset: dataset,
        total: total,
        average: Math.round(average * 100) / 100,
        median: median,
        frequency: frequency,
        data: data
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date(),
        datasets: Object.keys(datasets).length 
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Demo dataset 123446 initialized`);
});

module.exports = app;