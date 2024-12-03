const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middelware/checkAuth');
const commentController = require('../controllers/commentController');

router.get('/comment', isLoggedIn, commentController.comment);
router.get('/comment/item/:id', isLoggedIn, commentController.dashboardViewComment); 
router.put('/comment/item/:id', isLoggedIn, commentController.dashboardUpdateComment); 
router.delete('/comment/item-delete/:id', isLoggedIn, commentController.dashboardDeleteComment); 
router.get('/comment/addComment', isLoggedIn, commentController.dashboardAddComment);
router.post('/comment/addComment', isLoggedIn, commentController.dashboardAddCommentSubmit);


module.exports = router;