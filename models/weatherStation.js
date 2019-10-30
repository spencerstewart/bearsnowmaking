var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WeatherStationSchema = new Schema(
    {
        timestamp: Date,
        dry_temp: Number,
        humidity: Number,
        wetbulb: Number
    }
);

module.exports = mongoose.model('WeatherStation', WeatherStationSchema);
