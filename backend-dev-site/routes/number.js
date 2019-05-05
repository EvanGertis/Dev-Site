var express = require('express');
var router = express.Router();
const number = require('../build/Release/num');
var sixtynine = number.sum();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({theNumber: sixtynine});
});

module.exports = router;
