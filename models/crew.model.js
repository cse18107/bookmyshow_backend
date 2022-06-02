const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({

});

const Crew = mongoose.Model('Crew',crewSchema);

module.exports = Crew;