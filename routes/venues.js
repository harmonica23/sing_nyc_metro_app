const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');


router.get('/new', venuesCtrl.new);
router.get('/:area', venuesCtrl.index); 
router.get('/', venuesCtrl.areas);
router.get('/show/:venueId', venuesCtrl.show);
router.post('/', venuesCtrl.create);


module.exports = router;
