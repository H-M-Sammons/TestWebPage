const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const webRoutes = require('./routes/webRoutes');

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
app.get('/', (req, res)=>{
    res.render('index');
});

app.use('/')