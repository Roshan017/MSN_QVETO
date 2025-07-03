const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MONGODB Connected")
    }
    catch(e){
        console.log(`Error Connecting to DB: ${e.message}`);
        process.exit(1)
        
    }
}

module.exports = connectDB;