const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');

router.get('/new', venuesCtrl.new);
/* GET areas list. */
// router.get('/:area', venuesCtrl.index); 

router.get('/', venuesCtrl.areas);

router.get('/venue/:venueId', venuesCtrl.show);


router.post('/:area/venue', venuesCtrl.create);



module.exports = router;
