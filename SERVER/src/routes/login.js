const express = require('express');
const router = express.Router();

const handlelogin = require("../controllers/login");

router.route('/login').post(handlelogin);

module.exports = router;