var express = require('express');
var pug = require('pug');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var route = require('./routes/routes.js');
//var middleware = require('./middleware.js');
var app = express();
var session = require('express-session');
var mongoose = require('mongoose');

// use Pug and set the public folder for static content, like the css file in this example
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(cookieParser('This is my passphrase'));
app.use(express.static(path.join(__dirname + '/public')));
app.use(session({
    secret: 'a4f8071f-c873-4447-8ee2',
    cookie: { maxAge: 2628000000 },
    resave: true,
    saveUninitialized: true,
    store: new (require('express-sessions'))({
        storage: 'mongodb',
        instance: mongoose, // optional
        host: 'localhost', // optional
        port: 27017, // optional
        db: 'test', // optional
        collection: 'sessions', // optional
        expire: 86400 // optional
    })
}));

var urlencodedParser = bodyParser.urlencoded({extended: true});

app.get('/', route.index);
app.get('/create', route.create);
app.get('/edit/:id', route.edit);
app.get('/login', route.login);
app.post('/login', urlencodedParser, route.loginButton);
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