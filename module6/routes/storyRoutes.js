const express = require('express');
const router = express.Router();
const controller = require('../controllers/storyController')
//GET /stories: send all stories to the user
router.get('/',controller.index);
//GET /stories/news:
router.get('/new', controller.new);
//POST /stories:
router.post('/', controller.create);
//GET /stories/:id: send the details of story
router.get('/:id', controller.show);
//get /stories/:id/edit
router.get('/:id/eddit', controller.edit);
//PUT /stories/:id: update
router.put('/:id', controller.update);
//DELETE /stories/:id, delete bassed on id
router.delete('/:id', controller.delete);



//GET /stories/:id: send the details of story
//router.get('/:topic', controller.listTopic);


module.exports = router;

