const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    titel: String,
    locatie: String,
    datum: Date,
    organisator: String,
    deelnemers: Number,
    beschrijving: String,
    inschrijvingen: Number    
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;