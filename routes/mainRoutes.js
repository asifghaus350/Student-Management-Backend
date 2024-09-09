const Router=require('express').Router();
const { Register, GetStudent, GetStudentRollNumber,GetStudentName } = require('../controller/userController');


Router.post('/register',Register);

Router.get('/students',GetStudent);  // GET route to fetch all students
Router.get('/student/:rollNumber',GetStudentRollNumber); // GET route to fetch a student by rollNumber
Router.get('/student/name',GetStudentName); // get route to fetch a student by name
module.exports=Router;