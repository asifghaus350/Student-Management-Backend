const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const mainRoutes=require('./routes/mainRoutes');
const dbConnect=require('./config/dbConfig');
app.use(express.static('public'));

const dotenv=require('dotenv');
dotenv.config();

dbConnect(process.env.MONGO_URI);

// bodyparser middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//cors middleware
app.use(cors({
    origin: '*',
    methods:["GET","POST","HEAD","PATCH","PUT","DELETE"],
    preflightContinue:false,
    optionsSuccessStatus:200,
    credentials:true
}));

// POST route to add a student
app.use('/',mainRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});