var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
    initials: {type: String},
    numGuesses: {type: Number},
    seconds: {type: Number}
}, {
    timestamps: true
});

module.exports = mongoose.model('Score', scoreSchema)