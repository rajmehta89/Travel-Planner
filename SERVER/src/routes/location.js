const express = require('express');
const router = express.Router();

const handlelocation = require("../controllers/location");

router.route('/api/location').post(handlelocation);

module.exports = router;