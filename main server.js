const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1:27017/Hotel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// POST route to add a student
app.post('/Hotel', async (req, res) => {
  try {
    const studentData = req.body;

    const newStudent = new Student(studentData);
    const response = await newStudent.save();

    console.log('Student data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch a student by rollNumber
app.get('/student/:rollNumber', async (req, res) => {
  try {
    const rollNumber = req.params.rollNumber;
    const student = await Student.findOne({ rollNumber });

    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
