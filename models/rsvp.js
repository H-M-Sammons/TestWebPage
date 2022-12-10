const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rsvpSchema = new Schema({
    //this puts in the user
    player: {type: Schema.Types.ObjectId, ref: 'User'},
//this is the story
    comp: {type: Schema.Types.ObjectId, ref: 'Story'},
    // this is weather or not the person is comming. 
    temp: {type: String, required: [true, 'you have already rsvped for this event'], 
         unique: [true, 'You have already rsvped for this event']},
    comming: {type: String, required: [true, 'this is an error of comming'] }
});





module.exports= mongoose.model('Rsvp', rsvpSchema);