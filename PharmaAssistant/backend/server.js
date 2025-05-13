const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const config = require('./config');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: config.server.corsOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(morgan(config.server.nodeEnv === 'development' ? 'dev' : 'combined'));

// Import routes
const documentRoutes = require('./routes/documentRoutes');
const templateRoutes = require('./routes/templateRoutes');
const regulatoryRoutes = require('./routes/regulatoryRoutes');

// API routes
app.use('/api/documents', documentRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/regulatory', regulatoryRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Server is running',
    environment: config.server.nodeEnv,
    timestamp: new Date().toISOString()
  });
});

// Serve static assets in production
if (config.server.nodeEnv === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Set port
const PORT = config.server.port;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${config.server.nodeEnv} mode on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
