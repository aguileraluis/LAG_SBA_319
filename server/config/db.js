const mongoose = require('mongoose'); 
mongoose.set('strictQuery', false); 

const URL = process.env.MONGO_URI; 

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(URL); 
    console.log(`Databse Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error); 
  }
}

module.exports = connectDB; 