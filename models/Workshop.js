const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workshopSchema = new Schema({
    titel: String,
    locatie: String,
    datum: Date,
    organisator: String,
    deelnemers: Number,
    beschrijving: String,
    video: String,
    inschrijvingen: Number    
})

const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;