const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({

});

const Crew = mongoose.model('Crew',crewSchema);

module.exports = Crew;