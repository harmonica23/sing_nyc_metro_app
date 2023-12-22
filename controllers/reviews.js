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


const deleteReview = async (req, res) => {
    try {
    const venue = await Venue.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    if (!venue) return res.redirect('/venues');

    venue.reviews.remove(req.params.id);
    await venue.save();

    res.redirect(`/venues/${venue._id}`);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
    create,
    delete: deleteReview
}