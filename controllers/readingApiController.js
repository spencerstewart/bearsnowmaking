var Reading = require('../models/reading');

// Get Index
exports.index = function(req, res) {
    Reading.findOne({}, {}, {sort: {'_id': -1}}, function(err, reading) {
        if (err) console.log(err.message)
        res.json(
            reading
        );
    })
}

// Get Weather
// timestamp > location > dry, hum, wet
exports.weather = function(req, res) {
    Reading.find(
            {"timestamp":{"$gt":new Date(Date.now() - 24*60*60 * 1000)}},
            '_id timestamp temperature_1 temperature_2 temperature_3 temperature_4 temperature_5 humidity_1 humidity_2 humidity_3 humidity_4 humidity_5 wetbulb_1 wetbulb_2 wetbulb_3 wetbulb_4 wetbulb_5',
            {sort: {'_id': -1}},
            function(err, weatherReadings) {
        if (err) console.log(err.message)
        let weatherJson = {};
        weatherReadings.forEach(reading => {
            weatherJson[reading._id] = {
                'timestamp': reading.timestamp,
                'bearPeak': {
                    'dry_temp': reading.temperature_1,
                    'humidity': reading.humidity_1,
                    'wetbulb': reading.wetbulb_1
                },
                'topChair9': {
                    'dry_temp': reading.temperature_2,
                    'humidity': reading.humidity_2,
                    'wetbulb': reading.wetbulb_2
                },
                'topChair2': {
                    'dry_temp': reading.temperature_3,
                    'humidity': reading.humidity_3,
                    'wetbulb': reading.wetbulb_3
                },
                'baseArea': {
                    'dry_temp': reading.temperature_4,
                    'humidity': reading.humidity_4,
                    'wetbulb': reading.wetbulb_4
                },
                'pumphouse': {
                    'dry_temp': reading.temperature_5,
                    'humidity': reading.humidity_5,
                    'wetbulb': reading.wetbulb_5
                },
            };
        })
        res.json(
            weatherJson
        );
    })
}
