const mongoose=require('mongoose');

// MongoDB connection setup
const dbConnect=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });

    const db=mongoose.connection;

    db.on("error",(error)=>{
        console.log(error);
    })

    db.once('open',()=>{
        console.log("MongoDB connected successfully!");
    })
}

module.exports=dbConnect;