const mongoose = require('mongoose');


  try {
    mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useMongoClient:true });
    console.log('connected to MongoDB');
  } catch(error) {
    console.log('error connection to MongoDB:', error.message);
  }


  module.exports = mongoose;
