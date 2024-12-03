const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middelware/checkAuth');
const commentController = require('../controllers/commentController');

router.get('/comment', isLoggedIn, commentController.comment);
router.get('/comments/item/:id', isLoggedIn, commentController.dashboardViewComment); 
router.put('/comments/item/:id', isLoggedIn, commentController.dashboardUpdateComment); 
router.delete('/comment/item-delete/:id', isLoggedIn, commentController.dashboardDeleteComment); 
router.get('/dashboard/addComment/:id', isLoggedIn, commentController.dashboardAddComment);
router.post('/dashboard/addComment/:id', isLoggedIn, commentController.dashboardAddCommentSubmit);


module.exports = router;