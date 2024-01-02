const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const venueSchema = new Schema({
    venueName: String,
    address: String,
    website: String,
    phone: String,
    when: String,
    other: String,
    highlights: String,
    area: {
        type: String,
        enum: ['NYC', 'Long-Island', 'Westchester', 'NJ-metro', 'CT-metro']
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Venue', venueSchema)