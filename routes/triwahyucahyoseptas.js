// Link Repository : https://github.com/TWCS911/PAW2_UTS_2226240060

var express = require('express');
var router = express.Router();
const TriwahyucahyoseptaController = require('../controller/triwahyucahyosepta');

/* GET home page. */
router.post('/', TriwahyucahyoseptaController.createdPariwisata);
router.get('/', TriwahyucahyoseptaController.readPariwisata);

module.exports = router;
