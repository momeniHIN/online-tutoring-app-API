const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
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
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    userRole: String,
    _id: Number
    

},{timestamps:true});


module.exports = mongoose.model('User', userSchema);