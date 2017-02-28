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

// app.get('/', function(req, res){
//     res.render('index');
// });
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

app.listen(3000);