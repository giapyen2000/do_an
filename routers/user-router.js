const express = require('express');
const router = express.Router();
const {
    viewRegisterController,
    registerController,
    viewLoginController,
    loginController,
    logoutController,
} = require('../controllers/user-controller');

// Router Register
router.get('/register', viewRegisterController);
router.post('/register', registerController);

// Router Login
router.get('/login', viewLoginController);
router.post('/login', loginController);

// Router Logout
router.get('/logout', logoutController);

module.exports = router;