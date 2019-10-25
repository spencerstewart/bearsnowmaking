var express = require('express');
var router = express.Router();

// Require controllers
const reading_controller = require('../controllers/readingController');

/* GET home page. */
router.get('/', reading_controller.index);

router.post('/', reading_controller.add_reading)

module.exports = router;
