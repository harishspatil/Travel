const mongoose = require('mongoose');
const {Schema} = mongoose;

const AdminSchemas = new Schema({
    email:{
        type: String,
        require: true 
    },

    empid: {
        type: String,
        require: true
    },

    name: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },
    
    fare: {
        type: String,
        require: true
    },
    
    gender: {
        type: String,
        require: true
    },

    phone: {
        type: String,
        require: true
    },

    address: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('admin', AdminSchemas)