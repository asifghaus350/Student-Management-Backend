const mongoose = require('mongoose');

// Define MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/students_details';

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to events (to get notifications on connection or errors)
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('Connection error:', err);
});

// Export the database connection
module.exports = db;
