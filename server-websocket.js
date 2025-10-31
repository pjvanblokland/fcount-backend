const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Directory for storing datasets
const DATA_DIR = './data';

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Dataset class for managing F-count statistics
class Dataset {
  constructor(number) {
    this.number = number;
    this.aantallenf = new Array(50).fill(0);
    this.lastUpdate = new Date();
  }

  addCount(count) {
    if (count >= 0 && count < this.aantallenf.length) {
      this.aantallenf[count]++;
      this.lastUpdate = new Date();
      return true;
    }
    return false;
  }

  clear() {
    this.aantallenf = new Array(50).fill(0);
    this.lastUpdate = new Date();
  }

  toJSON() {
    return {
      number: this.number,
      aantallenf: this.aantallenf,
      lastUpdate: this.lastUpdate
    };
  }
}

// In-memory storage
const datasets = new Map();

// Load dataset from file
async function loadDataset(number) {
  try {
    const filePath = path.join(DATA_DIR, `${number}.json`);
    const data = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(data);
    
    const dataset = new Dataset(number);
    dataset.aantallenf = parsed.aantallenf || new Array(50).fill(0);
    dataset.lastUpdate = new Date(parsed.lastUpdate || Date.now());
    
    return dataset;
  } catch {
    return new Dataset(number);
  }
}

// Save dataset to file (only for persistent datasets)
async function saveDataset(dataset) {
  // Demo dataset 123446 is temporary - don't save
  if (dataset.number === '123446') {
    return;
  }
  
  try {
    await ensureDataDir();
    const filePath = path.join(DATA_DIR, `${dataset.number}.json`);
    await fs.writeFile(filePath, JSON.stringify(dataset.toJSON(), null, 2));
  } catch (error) {
    console.error('Error saving dataset:', error);
  }
}

// Get or create dataset
async function getDataset(number) {
  if (!datasets.has(number)) {
    const dataset = await loadDataset(number);
    datasets.set(number, dataset);
  }
  return datasets.get(number);
}

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  // Join dataset room
  socket.on('join-dataset', (dataset) => {
    socket.join(`dataset-${dataset}`);
    console.log(`Client ${socket.id} joined dataset ${dataset}`);
  });
  
  // Leave dataset room
  socket.on('leave-dataset', (dataset) => {
    socket.leave(`dataset-${dataset}`);
    console.log(`Client ${socket.id} left dataset ${dataset}`);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Broadcast data update to all clients watching a dataset
function broadcastDataUpdate(datasetNumber, data) {
  io.to(`dataset-${datasetNumber}`).emit('data-update', {
    dataset: datasetNumber,
    data: data
  });
  console.log(`Broadcasted update for dataset ${datasetNumber} to room dataset-${datasetNumber}`);
}

// REST API Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Add new F-count data
app.get('/geg', async (req, res) => {
  try {
    const { number, aantalf } = req.query;
    
    if (!number || !aantalf) {
      return res.status(400).json({ error: 'Missing number or aantalf parameter' });
    }
    
    const count = parseInt(aantalf);
    if (isNaN(count) || count < 0 || count > 49) {
      return res.status(400).json({ error: 'Invalid count value' });
    }
    
    const dataset = await getDataset(number);
    dataset.addCount(count);
    await saveDataset(dataset);
    
    // Broadcast update to all connected clients
    broadcastDataUpdate(number, dataset.toJSON());
    
    res.json({ 
      success: true, 
      dataset: number, 
      count: count,
      timestamp: dataset.lastUpdate 
    });
  } catch (error) {
    console.error('Error in /geg:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get dataset statistics
app.get('/stats', async (req, res) => {
  try {
    const { dataset } = req.query;
    
    if (!dataset) {
      return res.status(400).json({ error: 'Missing dataset parameter' });
    }
    
    const data = await getDataset(dataset);
    res.json(data.toJSON());
  } catch (error) {
    console.error('Error in /stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Clear dataset (demo only)
app.get('/clear', async (req, res) => {
  try {
    const { number } = req.query;
    
    if (!number) {
      return res.status(400).json({ error: 'Missing number parameter' });
    }
    
    // Only allow clearing demo dataset
    if (number !== '123446') {
      return res.status(403).json({ error: 'Only demo dataset can be cleared' });
    }
    
    const dataset = await getDataset(number);
    dataset.clear();
    
    // Broadcast clear to all connected clients
    broadcastDataUpdate(number, dataset.toJSON());
    
    res.json({ success: true, message: `Dataset ${number} cleared` });
  } catch (error) {
    console.error('Error in /clear:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
server.listen(port, () => {
  console.log(`F-Count WebSocket server running on port ${port}`);
  console.log('Features:');
  console.log('- Socket.IO real-time updates');
  console.log('- Smart data retention (123446 temporary)');
  console.log('- Cross-origin support');
  ensureDataDir();
});