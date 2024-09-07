const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true,

    },
    price:{
        type:String,
        requires:true,
    },

    Test:{
        type:String,
        required:true,
        enum:['sweet', 'spicy', 'sour'],
    },
     
    is_drink :{
        type:Boolean,
        default:false,
    },

    ingredients:{
        type:String,
        default:[],
    },

    num_sale:{
        type:Number,
        default:0,
    }

})

const MenuItem = mongoose.model('MenuItem'.menuItemSchema);
module.exports = MenuItem;