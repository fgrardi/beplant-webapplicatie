const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workshopSchema = new Schema({
    onderwerp: String,
    locatie: String,
    date: Date,
    organisator: String,
    deelnemers: Number,
    beschrijving: String,
    video: String    
})

const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;