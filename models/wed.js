const {v4: uuidv4} = require('uuid');
const events = [
{
    id: '1',
    category: 'Free Style Baking',
    hostName: 'UNCC Cook Off',
    time: '28th 8am to 7pm',
    location: 'UNCC kitchen A',
    description: 'By entering into this competition there is no telling what other dishes you might be competitions against. This is not for the faint of hart as it is one our faster pasted competitions.' ,
    otherInfo: 'In years passed we have had anywhere from grilled peaches, to sushi, even soups because of this, this year we have broken this compition into two parts. Baking and cooking, that way there is some simalarty so that the judges can better score foods.'
    , image: '/public/images/freestyle.jpg'
}
,
{   id: '2',
    category: 'Free Style Cooking',
    hostName: 'UNCC Cook Off',
    time: '28th 8am to 7pm',
    location: 'UNCC kitchen B',
    description: 'By entering into this competition there is no telling what other dishes you might be competitions against. This is not for the faint of hart as it is one our faster pasted competitions.' ,
    otherInfo: 'In years passed we have had anywhere from grilled peaches, to sushi, even soups because of this, this year we have broken this compition into two parts. Baking and cooking, that way there is some simalarty so that the judges can better score foods.'
    , image: '/public/images/free2.jpg'
}
,
{
    id: '3',
    category: 'BBQ Pork',
    hostName: 'UNCC Cook Off',
    time: '27th 12pm to 6pm',
    location: 'UNCC kitchen A',
    description: 'In this competitions you will be given a cut of meet and a general guidlines about how it is to be either grilled, or somked. It is up to you to come up with the spices that will complement the meat and cooking type. Meat must meet CDC guidlines for cooking pork' ,
    otherInfo: 'Competiters will be given exactly 6 hours to complete this compitions, this time includes cook and resting time for the meat. Use your time wisley.',
    image: '/public/images/pork.jpg'

}
,
{
    id: '4',
    category: 'BBQ Beef',
    hostName: 'UNCC Cook Off',
    time: '27th 8am to 12pm',
    location: 'UNCC kitchen B',
    description: 'In this competitions you will be given a cut of meet and a general guidlines about how it is to be either grilled, or somked. It is up to you to come up with the spices that will complement the meat and cooking type. All meat must be cooked to atlest well done.' ,
    otherInfo: 'Competiters will be given exactly 8 hours to complete this compitions, this time includes cook and resting time for the meat. Use your time wisley.'
 ,  image: '/public/images/beef.jpg'
}
,
{
    id: '5',
    category: 'BBQ chiken',
    hostName: 'UNCC Cook Off',
    time: '27th 2pm to 4pm',
    location: 'UNCC kitchen B',
    description: 'In this competitions you will be given a cut of meet and a general guidlines about how it is to be grilled. It is up to you to come up with the spices, and side dish that will complement the meat and cooking type. Meat must meet CDC guidlines for cooking chicken' ,
    otherInfo: 'Competiters will be given exactly 2 hours to complete this compitions, this time includes cook time and time used for the side dish. Use your time wisley.',
    image: '/public/images/chicken.jpg'
}
,
{
    id: '6',
    category: 'Pastry',
    hostName: 'UNCC Cook Off',
    time: '26th 8am to 2pm',
    location: 'UNCC kitchen A',
    description: 'In this competitions you will be given a pastry type two days befor hand and it is up to you to find and pratice the recipy befor the compition. Compition day you will submit your choses recipy and make it from scatch.' ,
    otherInfo: 'Competiters time frame will be anoucned when the pastery type is given, this time includes cook and set time.',
    image: '/public/images/pastry.jpg'
}
,
{
    id: '7',
    category: 'Bread',
    hostName: 'UNCC Cook Off',
    time: '26th 8am to 6pm',
    location: 'UNCC kitchen B',
    description: 'In this competitions you will be type of bread one day befor hand and it is up to you to find and pratice the recipy befor the compition. Compition day you will submit your choses recipy and make it from scatch.' ,
    otherInfo: 'Competiters time frame will be anoucned when the bread type is given, this time includes cook and set time.',
    image: '/public/images/bread.jpg'
}
,
{
    id: '8',
    category: 'Pastry',
    hostName: 'UNCC Cook Off',
    time: '26th 2pm to 8pm',
    location: 'UNCC kitchen A',
    description: ' No inforamtion will be given untill compition day. On the day of the compition constestance will be given a recapie and are expected to make it then and there with no preptime' ,
    otherInfo: 'Competiters will be given 6 hours to cook and set their dish.',
    image: '/public/images/freeForAl.jpg'
}
]; 

exports.find = function(){
    return events;
}
exports.findById = function(id){
    return events.find(events=>events.id == id);
};

exports.save = function (events){
    events.id = uuidv4();
    events.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    events.push(events);
};

exports.updateByID = function(id, newEvent){
    let events = events.find(events=>events.id == id);
    if(events){
    events.time = newEvent.time;
    events.location= newStory.location;
    events.description= newStory.description;
    events.otherInfo= newStory.otherInfo;
    return true;
}
else{
    return false;
}
}

exports.deleteById = function(id){
    let index = events.findIndex(events =>events.id === id);
    if(index !== -1){
        events.splice(index, 1);
        return true;
    }else{
        return false;
    }
}