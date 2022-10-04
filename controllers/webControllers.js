const model = require('../models/web');

exports.index = (req, res)=>{
    // res.send('send all stories');
    let web = model.find();
    res.render('../views/pages/index', {web});
 };
 
 //GET /stories/news:
exports.new = (req, res)=>{
    res.render('../views/pages/newComp');
};

//POST /stories:
exports.create = (req, res)=>{
    // res.send('Created a new story');
    let web = req.body;
    model.save(web);
    res.redirect('/events');
 };
 
 // need to add the last 3 functions