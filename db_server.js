const express = require('express');
const app = express();
const db = require('./db');

// If you have a database connection setup in a separate file (e.g., db.js), you can require it here
// const db = require('./db');

// In-memory array to store students (this is a placeholder; usually, you'd fetch this data from a database)
const students = [
    { id: 1, name: 'John Doe', age: 16, class: '10th Grade', rollNumber: '12345' },
    { id: 2, name: 'Jane Smith', age: 15, class: '9th Grade', rollNumber: '54321' },
    { id: 3, name: 'Alice Johnson', age: 17, class: '11th Grade', rollNumber: '67890' }
];

// GET route to fetch all students
app.get('/students', (req, res) => {
    res.status(200).send(students);
});

// GET route to fetch a student by ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10); // Parse ID as integer
    const student = students.find(s => s.id === studentId); // Find the student by ID
    
    if (!student) { // If student is not found, return 404
        return res.status(404).send({ message: 'Student not found' });
    }

    res.status(200).send(student); // Return the student details
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
