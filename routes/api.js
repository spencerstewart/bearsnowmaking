var express = require('express');
var router = express.Router();
const reading_api_controller = require('../controllers/readingApiController');

/* GET users listing. */
router.get('/', reading_api_controller.index);

router.get('/weather', reading_api_controller.weather);


// router.get('/weather', (req, res, next) => {
//   res.json({
//     'pumphouse': 'cold'
//   })
// })

module.exports = router;
