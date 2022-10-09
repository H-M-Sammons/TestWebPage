const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController')

//GET /stories: send all stories to the user
router.get('/',controller.index);
//POST /stories:
router.post('/', controller.create);
//contact you might need to add the contact
router.get('/contactUs',controller.contact);
//about
router.get('/aboutUs',controller.aboutUs);
module.exports = router;