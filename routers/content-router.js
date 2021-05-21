const {
    request
} = require('express');
const express = require('express');
const router = express.Router();
const {
    checkAuth
} = require('../middleware/check-auth');
const {
    viewUpdateContentController,
    createContentController,
    viewCreateContentController,
    viewAllContentController,
    updateContentController,
    removeContentController,
    showAllContentController,
    showAlls,
    showOne

} = require('../controllers/content-controller');

// Create content
router.get('/create-contents', checkAuth, viewCreateContentController);
router.post('/create-contents', checkAuth, createContentController);

// View contents
router.get('/contents', checkAuth, viewAllContentController);

// Update content
router.get('/update-contents/:id', checkAuth, viewUpdateContentController);
router.post('/update-contents/:id', checkAuth, updateContentController);

// Remove Content
router.post('/delete-contents/:id', checkAuth, removeContentController);

// Show Content
router.get(process.env["PORT"], showAllContentController);
// show 
router.get('/show-content', showAlls);
//  showOne
router.get('/show/:id', showOne);

module.exports = router;