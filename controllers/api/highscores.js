var Score = require('../../models/score');
var request = require('request');

function getScores(req, res) {
    Score.find({}, function(err, scores) {
        res.status(200).json(scores)
    })
}

function createNewScore(req, res) {
    var score = new Score(req.body);
    credit.save(err => {
        req.scores.push(score);
        req.save(function(err) {
            req.populate('scores', function (err) {
                res.json(req)
            });
        });
    });
}

module.exports = {
    getScores,
    createNewScore
}