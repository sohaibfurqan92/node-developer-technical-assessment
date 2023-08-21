const express = require('express');
const { getVariations } = require('../controllers/controllers');

const router = express.Router();

// get pokemon species
router.get('/get-variations', getVariations);


module.exports = router;