const User = require('../models/user');
const Venue = require('../models/venue');
const Area = require('../models/area')


const areas = (req, res) => {
    res.render('areas/main', {title: 'Areas'});
}

const index = async (req, res) => {
    const venuesByArea = await Venue.find({area: req.params.area});
    const capitalizedArea = req.params.area.replace(/-/g, ' ').toUpperCase();
    res.render('areas/index', { title: `${capitalizedArea} VENUES`, venuesByArea }); 
};

const show = async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.venueId);
        res.render('venues/show', { title: `${req.params.area}`, venue});
    } catch (err) {

    }
}


const newVenue = (req,res) => {
    res.render('venues/new', { title: 'Add Venue', errorMsg: '' })
}


const create = async (req, res) => {   
    try {
        await Venue.create(req.body);
    } catch (err) {
        console.log(err)
        res.render('venues/new', { errorMsg: err.message });
    }
}

module.exports = {
    index,
    areas,
    show,
    new: newVenue,
    create
}