const express = require('express');
const fishRoutes = require('../fish/fish-routes.js');
const router = express.Router();

router.use('/fish', fishRoutes);

module.exports = router;