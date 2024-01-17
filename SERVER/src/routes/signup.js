const express = require('express');
const router = express.Router();
const handlesignup = require("../controllers/sigup");

router.route('/sign').post(handlesignup);

module.exports = router;