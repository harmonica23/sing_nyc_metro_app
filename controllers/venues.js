const Venue = require('../models/venue');


const areas = (req, res) => {
    res.render('areas/main', { title: 'Venues by Area' });
}

const index = async (req, res) => {
    const venuesByArea = await Venue.find({ area: req.params.area });
    const formattedArea = req.params.area.replace(/-/g, ' ');
    res.render('areas/index', { title: `${formattedArea} Venues`, venuesByArea });
};

const show = async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.venueId);
        res.render('venues/show', { title: `${req.params.area}`, venue });
    } catch (err) {
    }
}

const newVenue = (req, res) => {
    res.render('venues/new', { title: 'Add Venue', errorMsg: '' })
}

const create = async (req, res) => {
    try {
        const venue = await Venue.create(req.body)
        res.render('venues/show', { title: 'Venue View', venue });
    } catch (err) {
        res.redirect('/venues');
    }
}

const addReview = async (req, res) => {
    const venue = await Venue.findById(req.params.id)
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
    venue.reviews.push(req.body)
    try {
        await venue.save()
        res.redirect(`/venues/${venue._id}`)
    } catch (err) {
        res.render('reviews/new', { title: 'Add Review', errorMsg: '' });
    }
}


module.exports = {
    index,
    areas,
    show,
    new: newVenue,
    addReview,
    create
}