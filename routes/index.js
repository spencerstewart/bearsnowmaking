var express = require('express');
var router = express.Router();
const basicAuth = require('express-basic-auth');
// Bring in environmental variables
const dotenv = require('dotenv');
dotenv.config();
let postpassword = process.env.POST_PASSWORD

// Require controllers
const reading_controller = require('../controllers/readingController');

/* GET home page. */
router.get('/', reading_controller.index);

router.post('/',
    basicAuth({
        users: { 'snowmaking': postpassword },
        challenge: true
    }),
    reading_controller.add_reading)

module.exports = router;
