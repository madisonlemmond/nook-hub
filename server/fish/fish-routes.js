const express = require('express');
const fishController = require('./fish-controller');

const router = express.Router();

router.get('/all', fishController.getAllFish);
router.get('/id/:id', fishController.getFishById)

module.exports = router;