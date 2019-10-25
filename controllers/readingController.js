var Reading = require('../models/reading');

// Get Index
exports.index = function(req, res) {
    Reading.findOne({}, {}, {sort: {'_id': -1}}, function(err, reading) {
        if (err) console.log(err.message)
        res.render('index', {title: 'Bear Snowmaking Data', error: err, reading: reading});
    })
}

exports.add_reading = function(req, res) {
    console.log('receiving a post request');
    console.log(req.body);
    let reading = new Reading(req.body);
    reading.save()
        .then( reading => {
            res.status(200).json({'status': 'Added reading from '+ reading.timestamp})
        })
        .catch( err => {
            res.status(400).send(err)
        })
}