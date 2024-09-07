const mongoose = require('mongoose');

// Define the person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  age: {
    type: Number,
    required: true, // Make age required if you want to ensure it is provided
  },

  work: {
    type: String,
    enum: ['chef', 'manager', 'waiter'],
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true, // Ensure email is required if you want to make it mandatory
 // Optional regex for email validation
  },

  address: {
    type: String,
  },

  salary: {
    type: Number,
    required: true,
  }
});

// Create and export the person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;







