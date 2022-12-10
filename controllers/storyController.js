const story = require('../models/story');
const model = require('../models/story');
const person = require('../models/user');
const Rsvp = require('../models/rsvp');

exports.index = (req, res, next)=>{
   //res.send('send all stories');
  // let stories2 = model.findTopic();
   let data ={};
   model.find()
   .then(stories=>{
      data.stories = stories
      return model.distinct("topic")
   })
   .then(topics=>{
      data.topics = topics
     // console.log(data);
      res.render('./story/index', {data})
   })
   .catch(err=>next(err));
};

//exports.index = (req, res)=>{
   // res.send('send all stories');
  // let stories = model.find();
   //let stories2 = model.findTopic();
   //console.log(stories2);
   //res.render('../views/story/index', {stories, stories2});
//};

//GET /stories/news:
exports.new = (req, res)=>{
   res.render('./story/new');
};
//POST /stories:
exports.create = (req, res, next)=>{
    let story = new model(req.body);//create a new story document
    story.author = req.session.user;
    story.save()//insert the document to the database
    .then(story=> {
        req.flash('success', 'Story has been created successfully');
        res.redirect('/stories');
    })
    .catch(err=>{
        if(err.name === 'ValidationError' ) {
        req.flash('error', err.message);
        return res.redirect('/back');
        }
        next(err);
    });
  
};
//GET /stories/:id: send the details of story
exports.show = (req, res, next)=>{
   let id = req.params.id;
   //this is the id for the story, rsvp has this as item comp
   let i;
   
   //this is all rsvps for this compition
  // let hold = Rsvp.countDocuments
   //copy the method from profile
   //model.findById(id).populate('author', 'firstName lastName')
   Promise.all([model.findById(id).populate('author', 'firstName lastName'),  Rsvp.find({comp: id})])
   .then(results=>{
      
            const [story, rsvps] = results;
            console.log(rsvps);
            return res.render('./story/show', {story, i, rsvps});
   })
   .catch(err=>next(err));
};

exports.edit = (req, res, next)=>{
    let id = req.params.id;
    model.findById(id)
    .then(story=>{
        return res.render('./story/edit', {story});
    })
    .catch(err=>next(err));
};
//PUT /stories/:id: update
exports.update = (req, res, next)=>{
    let story = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, story, {useFindAndModify: false, runValidators: true})
    .then(story=>{
        return res.redirect('/stories/'+id);
    })
    .catch(err=> {
        if(err.name === 'ValidationError') {
            req.flash('error', err.message);
            return res.redirect('/back');
        }
        next(err);
    });
};
exports.delete = (req, res, next)=>{
    //story id
    let id = req.params.id;
    //use a promis .all
    Promise.all([model.findByIdAndDelete(id, {useFindAndModify: false}), Rsvp.remove({ comp: id}, {useFindAndModify: false})])
    Rsvp.remove({ comp: id}, {useFindAndModify: false})
    
    .then(story =>{
        
        //compare comp ides
        res.redirect('/stories');
    })
    .catch(err=>next(err));
};


exports.rsvp = (req, res, next)=>{
    //this knows what story we are talking about already
    let rsvp = new Rsvp()
    let id = req.params.id;
    let comp = req.params.id; 
    let player = req.session.user;
    let comming = req.body.rsvp
    let temp = comp+player;
    rsvp.comp = comp;
    rsvp.player = player;
    rsvp.comming = comming;
    rsvp.temp =temp;

    Rsvp.findOneAndUpdate({player: player, comp: comp}, {comp: comp, player: player, comming: comming, temp: temp},{new: true}, (error, data)=>{
        if(error){
            console.log(error);
        }else{
            console.log(data);
            console.log("run 111");
            if (data == null){
                rsvp.save();
                    }
        }
        req.flash('success', 'rsvp was made');
       return res.redirect('/stories/'+id);
    });

        //this says that they have already revped
       
           // Rsvp.findOneAndUpdate({temp: temp}, {comming: comming}, err =>{
            //    if (err){
              //      console.log(err)
               // }
               

    //if it doesn't exist make new user entry
            //you need to make a new thing
          
 



  
    //return res.redirect('/stories/'+id);
};
//exports.listTopic = (req, res, next)=>{
      // res.send('send all stories');
  //    let stories = model.groupByTopic(topic);
    //  console.log(stories);
      //res.render('../views/story/index', {stories});
      
//};