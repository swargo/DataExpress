var express = require('express'),
pug = require('pug'),
path = require('path'),
bcrypt = require('bcrypt-nodejs'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
route = require('./routes/routes.js');

var app = express();
// use Pug and set the public folder for static content, like the css file in this example
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public'))); 

// app.get('/:viewname', function(req, res){
//     res.render(req.params.viewname, pureJson);
//     res.status(404).send("Sorry, can't find that page!");
// });

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get('/', route.index);
app.get('/create', route.create);
app.get('/edit/:id', route.edit);
app.get('/details/:id', route.details);
app.post('/create', urlencodedParser, route.createPerson);
app.post('/edit/:id', urlencodedParser, route.editPerson);
app.get('/delete/:id', route.delete);
app.get('/admin', route.admin);
app.get('/login', route.login);

app.listen(3000);

//Cookie code

// var express = require('express');
// var cookieParser = require('cookie-parser');

// var app = express();

// var count = 0;

// app.use(cookieParser('This is my passphrase'));

// app.get('/', function (req, res) {
//     if(req.cookies.beenHereBefore === 'yes') {
//         count++;
//         res.send('You have been here ' + count + ' times before');
//     } else {
//         count = 0;
//         res.cookie('beenHereBefore', 'yes');
//         res.send('This is your first time');
//     }
// });

// app.get('/clear', function (req, res) {
//     res.clearCookie('beenHereBefore');
//     res.redirect('/');
// });

// app.listen(3000);