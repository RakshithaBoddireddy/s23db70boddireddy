const mongoose = require("mongoose")
const vehiclesSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("vehicles", 
vehiclesSchema)