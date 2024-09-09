const Student = require('../model/userModel');


const Register = async (req, res) => {
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
}

const GetStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const GetStudentRollNumber=async (req, res) => {
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
  }

  const GetStudentName=async (req, res) => {
    try {
      const name = req.params.name;
      console.log("name:",name);
      const student = await Student.findOne({ name });
  
      if (!student) {
        return res.status(404).json({ msg: 'Student not found' });
      }
  
      res.status(200).json(student);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    Register,
    GetStudent,
    GetStudentRollNumber,
    GetStudentName

}