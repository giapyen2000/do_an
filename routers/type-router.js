const express = require('express');
const router = express.Router();
const {
    checkAuth
} = require('../middleware/check-auth');
const {
    viewCreateTypeController,
    createTypeController,
    viewAllTypeController,
    viewUpdateTypeController,
    updateTypeController,
    removeTypeController,
} = require('../controllers/type-controller');

// Create Type Router
router.get('/create-types', checkAuth, viewCreateTypeController);
router.post('/create-types', checkAuth, createTypeController);

// Start view all type
router.get('/types', checkAuth, viewAllTypeController);

// Start update type
router.get('/update-types/:id', checkAuth, viewUpdateTypeController);
router.post('/update-types/:id', checkAuth, updateTypeController);

// Start delete type
router.post('/delete-types/:id', checkAuth,removeTypeController);

module.exports = router;