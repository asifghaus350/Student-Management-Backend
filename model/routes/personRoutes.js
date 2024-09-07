const express = require('express');
const router = express.Router();
const Person = require('../models/Peron');

// Post route to add person 

router.post('/',async (req,res)=>{
    try{
        const data = req.body // assuming thev requst body contains the person data

        // create a new person documents using the mongoose model
        const newPerson = new Person(data);
        
        // save the new person to the database
        const response = await newPerson.save();
        console.log('data save');
    }
    catch(err){
        console.log(err);
    res.status(500).json({error: 'internal sever error '});
    }
})


// get method to get the Menu Item 

router.get('/',async(req,res)=>{
    try{
        const data = await MenuItem.fnd();
        console.log('Data Fetch');
        res.status(200).json('data');
    }
     catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server Error'});
     }
})

router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType; 
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log('response Fetch');
            res.status(200).json(Response);
        } else{
            res.status(404).json({error: 'invalid work type'});
        }
    } catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }

})

module.exports = router;