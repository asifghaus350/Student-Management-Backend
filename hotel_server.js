const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./model/Person');
const MenuItem = require('./model/MenuItem');

app.get('/', function(req, res) {
  res.send('Welcome to my hotel');
});

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the person and menu routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
