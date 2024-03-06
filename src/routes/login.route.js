const express = require('express');
const handlesignup = require("../controllers/User-Login-Controller/sigup");
const handleLogin = require("../controllers/User-Login-Controller/login");
const { sendEmail } = require("../controllers/User-Login-Controller/ResetPasswordSetting");
const handleGoogleSignUp = require("../controllers/User-Login-Controller/GoogleSignUp");
const handleResetPasswordEditing = require("../controllers/User-Login-Controller/ResetPasswordEditing");


const router = express.Router();

router
    .route('/loginhere')
    .post(handleLogin)


router
    .route('/signup')
    .post(handlesignup)


// router
//     .route('/googlesign')
//     .post(handleGoogleSignUp)



router
    .route('/forgot-password-setting')
    .post(sendEmail)

router
    .route('/forgot-password-editing')
    .post(handleResetPasswordEditing)




module.exports = router;