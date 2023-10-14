const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    step: Number,
    basicDetails: {
        name: String,
        email: String,
        phone: String,
        address: {
            line1: String,
            line2: String,
            city: String,
            state: String,
            pincode: String,
            country: String,
        },
    },
    files: [String], 
    geolocation: {
        latitude: Number,
        longitude: Number,
        status: String,
    },
    multiSelect: [String], // Store selected options
    timestamp: { type: Date, default: Date.now },

})

const FormModel = mongoose.model('formData', formSchema)

module.exports = FormModel;