const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const areaSchema = new Schema({
    name: String,
    venue: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Area', areaSchema)