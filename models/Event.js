const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    onderwerp: String,
    titel: String,
    locatie: String,
    date: Date,
    organisator: String,
    deelnemers: Number,
    beschrijving: String    
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;