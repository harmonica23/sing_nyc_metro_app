const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/new', ensureLoggedIn, venuesCtrl.new);
router.get('/:area', venuesCtrl.index); 
router.get('/', venuesCtrl.areas);
router.get('/show/:venueId', venuesCtrl.show);
router.post('/', ensureLoggedIn, venuesCtrl.create);


module.exports = router;
