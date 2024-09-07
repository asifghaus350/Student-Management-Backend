const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Student = require('./model/student');
// const Person = require('./model/Person'); // Ensure this path is correct


const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/hotel')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));


// POST route to add a person
app.post('/person', async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new person document using mongoose model
    const newPerson = new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
 app.listen(3002, () => {
    console.log(`Server is running on port ${3002}`);
  });
 