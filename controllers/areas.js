const Area = require('../models/area');

const index = async (req, res) => {
    const areas = await Area.find({});
    res.render('areas/index', {title: 'All Areas', areas});
};

module.exports = {
    index,
}