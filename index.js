var express = require('express');
var pug = require('pug');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var route = require('./routes/routes.js');
//var middleware = require('./middleware.js');

var app = express();
// use Pug and set the public folder for static content, like the css file in this example
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(cookieParser('This is my passphrase'));
app.use(express.static(path.join(__dirname + '/public')));
app.use(session({
    secret: '5ecretP455c0de',
    saveUninitialized: true,
    resave: true
}));

// app.get('/:viewname', function(req, res){
//     res.render(req.params.viewname, pureJson);
//     res.status(404).send("Sorry, can't find that page!");
// });

var urlencodedParser = bodyParser.urlencoded({extended: true});

app.get('/', route.index);
app.get('/create', route.create);
app.get('/edit/:id', route.edit);
app.get('/login', route.login);
app.get('/details/:id', route.details);
app.post('/create', urlencodedParser, route.createPerson);
app.post('/edit/:id', urlencodedParser, route.editPerson);
app.get('/delete/:id', route.delete);
app.get('/admin', route.admin);
app.get('/noEntry', route.noEntry);

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            } else
                res.redirect('/');
        }
    )
});
// checks to see if user and password are correct
app.post('/login', urlencodedParser, function (req, res) {
    if (req.body.username == 'user' && req.body.password == 'pass') {
        req.session.user = {isAuthenticated: true, username: req.body.username};
        res.redirect('/admin');
    } else {
        // logout here so if the user was logged in before, it will log them out if user/pass wrong
        res.redirect('/');
    }
});

exports.checkAuth = function (req, res, next) {
    if (req.session && req.session.user === "amy" && req.session.admin)
        return next();
    else
        return res.sendStatus(401);
};

/******************************
 **                          **
 **  C O O K I E   C O D E   **
 **                          **
 ******************************/

var count = 0;


app.get('/clear', function (req, res) {
    res.clearCookie('beenHereBefore');
    res.redirect('/');
});

app.get('/', function (req, res) {
    if (req.cookies.beenHereBefore === 'yes') {
        count++;
        res.send('You have been here ' + count + ' times before');
    } else {
        count = 0;
        res.cookie('beenHereBefore', 'yes');
        res.send('This is your first time');
    }

});

app.listen(3000);