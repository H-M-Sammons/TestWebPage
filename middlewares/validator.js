const {body} = require('express-validator');
const {validationResult} = require('express-validator');

exports.validateId = (req, res, next)=>{
    let id = req.params.id;
    //an objectId is a 24-bit Hex string
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid story id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};


exports.validateSignUp = [
    body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
    body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
    body('email', 'Email must be a valid email address').isEmail().trim().escape().normalizeEmail(),
    body('password', 'Password must be at least 8 charactes and at most 64').isLength({min:8, max:64}).trim().escape()
];


exports.validateLogIn = [
    body('email', 'Email must be a valid email').isEmail().trim().escape().normalizeEmail(),
    body('password', 'password has to between 8 and 64 charaters').isLength({min:8, max:64}).trim().escape()
    ];


exports.valdateResult = (req, res, next)=>{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        errors.array().forEach(error=>{
            req.flash('error', error.msg);
        });
        return res.redirect('back');
    } else{
       return next(); 
    } 
};

exports.validateEndTime = (req, res, next)=>{
    let start = req.body.start;
    let end = req.body.end;
    console.log(start);
    console.log(end);
 
     if(end > start){
        console.log("end > start");
         return next();
     }else if( end == "00:00"){
        console.log("00:00");
         return next();
     }else{
         //let err = new Error('End time has to be after start time');
         //err.status = 400;
         req.flash('error', 'Start time has to be befor end time');
         console.log("fail")
         return res.redirect('/stories/new');
         //return next(err);
     }
 };
exports.validateStory = [
    body('title', 'Title cannot be empty').notEmpty().trim().escape(),
    body('topic', 'topic cannot be empty').notEmpty().trim().escape(),
    body('start', 'topic cannot be empty').notEmpty().trim().matches("([01]?[0-9]|2[0-3]):[0-5][0-9]").escape(),
    body('end', 'topic cannot be empty').notEmpty().trim().matches("([01]?[0-9]|2[0-3]):[0-5][0-9]").escape(),
    body('date', 'topic cannot be empty').notEmpty().trim().isDate().isAfter('2022-12-09').escape(),
    body('location', 'location cannot be empty').notEmpty().trim().escape(),
    body('content', 'Content has a min lenth of 10').isLength({min:8}).trim().escape(),
    body('otherInfo', 'other Informion has a min lenth of 10').isLength({min:8}).trim().escape()
];
