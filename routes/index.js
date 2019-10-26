var express = require('express');
var router = express.Router();
const basicAuth = require('express-basic-auth');

// Require controllers
const reading_controller = require('../controllers/readingController');

/* GET home page. */
router.get('/', reading_controller.index);

router.post('/',
    basicAuth({
        users: { 'snowmaking': 'brrr' },
        challenge: true
    }),
    reading_controller.add_reading)

module.exports = router;
