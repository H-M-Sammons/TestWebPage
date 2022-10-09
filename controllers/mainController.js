const model = require('../models/story');
exports.index = (req, res)=>{
    res.render('index');
 };
 exports.contact = (req, res)=>{
    res.render('contactUs');
 };
 exports.aboutUs = (req, res)=>{
    res.render('aboutUs');
 };

 exports.create = (req, res)=>{
    // res.send('Created a new story');
    let story = req.body;
    model.save(story);
    res.redirect('/stories');
 };