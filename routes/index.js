const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home); 
router.get('/studyroom', homeController.studyroom); 
router.get('/studystats', homeController.studystats); 
router.get('/subscribe', homeController.subscribe);
module.exports = router;
