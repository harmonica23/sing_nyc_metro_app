const Venue = require('../models/venue');


const create = async (req, res) => {
        const venue = await venue.findById(req.params.id);
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        venue.reviews.push(req.body);
    try {
        await venue.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/venues/${venue._id}`);
};


module.exports = {
    create
}