const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const storyRoutes = require('./routes/storyRoutes');
const mainRoutes = require('./routes/mainRoutes');


//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middlware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//set up routes
app.use('/', mainRoutes);

//app.use('/contactUs', mainRoutes);

//app.use('/aboutUs', mainRoutes);
  
app.use('/stories', storyRoutes);

app.use((req, res, next)=>{
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});
app.use((err, req, res, next)=>{
    console.log(err.stack);
if(!err.status){
    err.status = 500;
    err.message = ("Internal server Error");

}
res.status(err.status);
res.render('error', {error: err});
});
//set the server
app.listen(port, host, ()=>{
    console.log('Server is runnint on port', port);
})


