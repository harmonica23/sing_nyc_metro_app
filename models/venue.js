const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const venueSchema =  new Schema({
    name: String,
    address: String,
    website: String,
    phone: String,
    when: String,
    hightlights: String,
    area: {
        type: String,
        enum: ['nyc', 'long-island', 'westchester', 'nj-metro', 'ct-metro']
    }
})

module.exports = mongoose.model('Venue', venueSchema)