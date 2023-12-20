const express = require('express');
const router = express.Router();
const areasCtrl = require('../controllers/areas');

/* GET areas list. */
router.get('/', areasCtrl.index); 





module.exports = router;
