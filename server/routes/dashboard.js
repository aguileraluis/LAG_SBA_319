const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middelware/checkAuth');
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard', isLoggedIn, dashboardController.dashboard);
router.get('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardViewNote); 
router.post('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardUpdateNote); 

module.exports = router;
