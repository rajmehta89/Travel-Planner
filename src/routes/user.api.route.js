const express = require('express');
const router = express.Router();

const getPlacelocation = require("../controllers/User-Api-Controller/getLocation");

router
    .route('/getlocation')
    .post(getPlacelocation);

module.exports = router;