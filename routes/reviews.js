var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/venues/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
router.delete('/:id', ensureLoggedIn, reviewsCtrl.delete);


module.exports = router;