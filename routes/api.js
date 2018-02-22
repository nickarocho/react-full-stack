var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api/highscores');

router.get('/highscores', apiCtrl.getScores)
router.post('/highscores', apiCtrl.createNewScore)

module.exports = router;