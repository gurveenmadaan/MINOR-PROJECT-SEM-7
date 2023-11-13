// index.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');



router.get('/', homeController.home); 
router.get('/studyroom',homeController.studyroom); 
router.get('/studystats', homeController.studystats); 
router.get('/subscribe', homeController.subscribe);
router.get('/mainpage', homeController.mainpage);
router.get('/development', homeController.devpage);
router.get('/interview', homeController.interview);
router.get('/syllabus', homeController.syllabus);
router.get('/android', homeController.android);
router.get('/web', homeController.web);
router.get('/ml', homeController.ml);
router.get('/blockchain', homeController.blockchain);
router.get('/devops', homeController.devops);






module.exports = router;
