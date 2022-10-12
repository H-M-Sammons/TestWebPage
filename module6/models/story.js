
const{DateTime} = require("luxon");
const {v4: uuidv4} = require('uuid');
const { connect } = require("../routes/storyRoutes");

const stories = [
    {
        id: '1',
        title: 'Free Style Baking',
        author: 'UNCC Cook Off',
        topic: 'Free Style',
        time: '10/7/2022',
        start: '8am',
        end: '7pm',
        date: '27th',
        location: 'UNCC kitchen A',
        content: 'By entering into this competition there is no telling what other dishes you might be competitions against. This is not for the faint of hart as it is one our faster pasted competitions.' ,
        otherInfo: 'In years passed we have had anywhere from grilled peaches, to sushi, even soups because of this, this year we have broken this compition into two parts. Baking and cooking, that way there is some simalarty so that the judges can better score foods.'
        , image: '/images/freestyle.jpg'
        
    }
    ,
    {   id: '2',
        title: 'Free Style Cooking',
        author: 'UNCC Cook Off',
        topic: 'Free Style',
        time: '10/7/2022',
        start: '8am',
        end: '7pm',
        date: '28th',
        location: 'UNCC kitchen B',
        content: 'By entering into this competition there is no telling what other dishes you might be competitions against. This is not for the faint of hart as it is one our faster pasted competitions.' ,
        otherInfo: 'In years passed we have had anywhere from grilled peaches, to sushi, even soups because of this, this year we have broken this compition into two parts. Baking and cooking, that way there is some simalarty so that the judges can better score foods.'
        , image: '/images/free2.jpg'
    }
    ,
    {
        id: '3',
        title: 'BBQ Pork',
        author: 'UNCC Cook Off',
        topic: 'BBQ',
        time: '10/7/2022',
        start: '12pm',
        end: '6pm',
        date: '27th',
        location: 'UNCC kitchen A',
        content: 'In this competitions you will be given a cut of meet and a general guidlines about how it is to be either grilled, or somked. It is up to you to come up with the spices that will complement the meat and cooking type. Meat must meet CDC guidlines for cooking pork' ,
        otherInfo: 'Competiters will be given exactly 6 hours to complete this compitions, this time includes cook and resting time for the meat. Use your time wisley.',
        image: '/images/pork.jpg'
    
    }
    ,
    {
        id: '4',
        title: 'BBQ Beef',
        author: 'UNCC Cook Off',
        topic: 'BBQ',
        time: '10/7/2022',
        start: '8am',
        end: '12pm',
        date: '27th',
        location: 'UNCC kitchen B',
        content: 'In this competitions you will be given a cut of meet and a general guidlines about how it is to be either grilled, or somked. It is up to you to come up with the spices that will complement the meat and cooking type. All meat must be cooked to atlest well done.' ,
        otherInfo: 'Competiters will be given exactly 8 hours to complete this compitions, this time includes cook and resting time for the meat. Use your time wisley.'
     ,  image: '/images/beef.jpg'
    }
    ,
    {
        id: '5',
        title: 'BBQ chiken',
        author: 'UNCC Cook Off',
        topic: 'BBQ',
        time: '10/7/2022',
        start: '2pm',
        end: '4pm',
        date: '27th',
        location: 'UNCC kitchen B',
        content: 'In this competitions you will be given a cut of meet and a general guidlines about how it is to be grilled. It is up to you to come up with the spices, and side dish that will complement the meat and cooking type. Meat must meet CDC guidlines for cooking chicken' ,
        otherInfo: 'Competiters will be given exactly 2 hours to complete this compitions, this time includes cook time and time used for the side dish. Use your time wisley.',
        image: '/images/chicken.jpg'
    }
    ,
    {
        id: '6',
        title: 'Pastry',
        author: 'UNCC Cook Off',
        topic: 'General Baking',
        time: '10/7/2022',
        start: '8am',
        end: '2pm',
        date: '26th',
        location: 'UNCC kitchen A',
        content: 'In this competitions you will be given a pastry type two days befor hand and it is up to you to find and pratice the recipy befor the compition. Compition day you will submit your choses recipy and make it from scatch.' ,
        otherInfo: 'Competiters time frame will be anoucned when the pastery type is given, this time includes cook and set time.',
        image: '/images/pastry.jpg'
    }
    ,
    {
        id: '7',
        title: 'Bread',
        author: 'UNCC Cook Off',
        topic: 'General Baking',
        time: '10/7/2022',
        start: '8am',
        end: '6pm',
        date: '26th',
        location: 'UNCC kitchen B',
        content: 'In this competitions you will be type of bread one day befor hand and it is up to you to find and pratice the recipy befor the compition. Compition day you will submit your choses recipy and make it from scatch.' ,
        otherInfo: 'Competiters time frame will be anoucned when the bread type is given, this time includes cook and set time.',
        image: '/images/bread.jpg'
    }
    ,
    {
        id: '8',
        title: 'Free for all',
        author: 'UNCC Cook Off',
        topic: 'General Baking',
        time: '10/7/2022',
        start: '2pm',
        end: '8pm',
        date: '26th',
        location: 'UNCC kitchen A',
        content: ' No inforamtion will be given untill compition day. On the day of the compition constestance will be given a recapie and are expected to make it then and there with no preptime' ,
        otherInfo: 'Competiters will be given 6 hours to cook and set their dish.',
        image: '/images/freeForAl.jpg'
    }
];

const unique = [...new Set(stories.map(story => story.topic))];
   

exports.findTopic = function(){
    return unique;
}

let arrayHonld = [];
// I was not sure how to do the connections so I followed a group by function tutorial
// this makes an array for every item that shares the same topic
//https://sebhastian.com/javascript-group-by/
//this makes a function that takes an array and the value you want to sort by


  

//const tempTopic = groupBy(stories, "topic");
//console.log(tempTopic);

//const topic = [...new Set(connect.map(story.topic))];
  //  return topic;

exports.find = function(){
    return stories;
}

exports.findById = function(id){
return stories.find(story=>story.id == id);
};

exports.save = function (story){
    story.id = uuidv4();
    story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    stories.push(story);
};

exports.updateByID = function(id, newStory){
    let story = stories.find(story=>story.id == id);
    if(story){
    story.title = newStory.title;
    story.location = newStory.location;
    story.content = newStory.content;
    story.otherInfo = newStory.otherInfo;
    return true;
}
else{
    return false;
}
}

exports.deleteById = function(id){
    let index = stories.findIndex(story =>story.id === id);
    if(index !== -1){
        stories.splice(index, 1);
        return true;
    }else{
        return false;
    }
}

exports.groupByTopic = function(){
    const tempTopic = groupBy(stories, "topic");
    return tempTopic;
}
