// index.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');



router.get('/', homeController.home); 
router.get('/meetingroom',homeController.meetingroom); 
router.get('/wellness', homeController.wellness); 
router.get('/subscribe', homeController.subscribe);
router.get('/mainpage', homeController.mainpage);
router.get('/mindfuliving', homeController.mindfuliving);
router.get('/connection', homeController.connection);
router.get('/wellness-resources', homeController.wellnessresources);
router.get('/meditation', homeController.meditation);
router.get('/yoga', homeController.yoga);
router.get('/manifestation', homeController.manifestation);


//to be updated 
router.get('/blockchain', homeController.blockchain);
router.get('/devops', homeController.devops);






module.exports = router;
