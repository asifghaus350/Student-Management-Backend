const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem'); // Corrected the typo in the require path

// POST method to add a menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        
        // Corrected the typo in the save method
        const response = await newMenu.save();
        console.log('Data saved');
        
        // Return the saved data in the response
        res.status(201).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET method to retrieve menu items
router.get('/', async (req, res) => {
    try {
        // Corrected the typo in the find method
        const data = await MenuItem.find();
        console.log('Data fetched');
        
        // Return the fetched data in the response
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
