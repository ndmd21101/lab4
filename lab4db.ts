const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create a User model based on the schema
export const User = mongoose.model('User', userSchema);
mongoose.connect('mongodb+srv://ndmd2110:tmkeGd7ZeDCRWENc@lab4.ivnkepg.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to mongo')
})
.catch(()=>{
    console.log('Failed to connect to mongo')
})
