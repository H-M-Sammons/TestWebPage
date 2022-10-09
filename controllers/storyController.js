
const model = require('../models/story');

exports.index = (req, res)=>{
   // res.send('send all stories');
   let stories = model.find();
   res.render('../views/story/index', {stories});
};
//GET /stories/news:
exports.new = (req, res)=>{
res.render('../views/story/new');
};
//POST /stories:
exports.create = (req, res)=>{
   // res.send('Created a new story');
   let story = req.body;
   model.save(story);
   res.redirect('/stories');
};
//GET /stories/:id: send the details of story
exports.show = (req, res, next)=>{
    let id = req.params.id;
    let story = model.findById(id);
    if(story){
    res.render('../views/story/show', {story});
    }
    let err = new Error('cannot find a event with id ' + id);
    err.status = 404;
    next(err);
};
//get /stories/:id/edit
 exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let story = model.findById(id);
    if(story){
    res.render('../views/story/edit', {story});
    }else{
        let err = new Error('cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }  
    //res.send('send the edit form');
};
//PUT /stories/:id: update
exports.update = (req, res, next)=>{
   // res.send('update story with id ' + req.params.id);
   let story = req.body;
   let id = req.params.id;

  if (model.updateByID(id, story)){
    res.redirect('/stories/'+id);
  }else{
    let err = new Error('cannot find a event with id ' + id);
    err.status = 404;
    next(err);
  }
};
//DELETE /stories/:id, delete bassed on id
exports.delete = (req, res, next)=>{
   // res.send('Delete story with id ' + req.params.id);
   let id = req.params.id;
   if(model.deleteById(id)){
        res.redirect('/stories');
   }else{
        let err = new Error('cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
   };