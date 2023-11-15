// index.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');



router.get('/', homeController.home); 
router.get('/meetingroom',homeController.meetingroom); 
router.get('//wellnessstats', homeController.wellnessstats); 
router.get('/subscribe', homeController.subscribe);
router.get('/mainpage', homeController.mainpage);
router.get('/mindfuliving', homeController.mindfuliving);
router.get('/connection', homeController.connection);
router.get('/syllabus', homeController.syllabus);
router.get('/android', homeController.android);
router.get('/web', homeController.web);
router.get('/ml', homeController.ml);
router.get('/blockchain', homeController.blockchain);
router.get('/devops', homeController.devops);






module.exports = router;
