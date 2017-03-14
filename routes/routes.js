var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var index = require('../index');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var salt = bcrypt.genSaltSync(10);
var hash;

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {
    
});

var personSchema = mongoose.Schema({
    username: String,
    password: String,
    userlevel: String,
    email: String,
    age: String,
    a1: String,
    a2: String,
    a3: String
});


var Person = mongoose.model('People_Collection', personSchema);

exports.index = function(req, res) {
    Person.find(function (err, person) {
        if (err) return console.error(err);
        res.render('index',{ title: 'People List', people: person});
    });  
};



exports.create = function (req, res) {
    res.render('create');
};

exports.noEntry = function (req, res) {
    res.render('noEntry');
};

exports.logout = function (req, res) {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    })
    res.render('/');
};

exports.createPerson = function (req, res) {
    var hash = bcrypt.hashSync(req.body.password, salt);
        var person = new Person({
        username: req.body.username,
        password: hash,
        userlevel: req.body.userlevel,
        email: req.body.email,
        age: req.body.age,
        a1: req.body.a1,
        a2: req.body.a2,
        a3: req.body.a3 });

        person.save(function (err, person) {
        if (err) return console.error(err);
            console.log(req.body.name + ' added');
        });
   res.redirect('/');
};

exports.edit = function (req, res) {
    Person.findById(req.params.id, function (err, person) {
        if (err) return console.error(err);
        res.render('edit', { person: person });
    }); 
};

exports.editPerson = function (req, res) {
    var hash = bcrypt.hash(req.body.password, null, null, function(err, hash) {
        Person.findById(req.params.id, function (err, person) {
            if (err) return console.error(err);
            person.username = req.body.username;
            person.password = hash;
            person.userlevel = req.body.userlevel;
            person.email = req.body.email;
            person.age = req.body.age;
            person.a1 = req.body.a1;
            person.a2 = req.body.a2;
            person.a3 = req.body.a3;
            person.save(function (err, person) {
            if (err) return console.error(err);
                console.log(req.body.name + ' updated');
            });
        }); 
    });
    res.redirect('/');
};

exports.delete = function (req, res) {
    Person.findByIdAndRemove(req.params.id, function (err, person) {
        if (err) return console.error(err);
        res.redirect('/admin');
    }); 
};

exports.details = function (req, res) {
    Person.findById(req.params.id, function (err, person) {
        if (err) return console.error(err);
        res.render('details',{ title: 'User List', person: person});
    });
};


exports.admin = function (req, res) {
    Person.find(function (err, person) {
        if (err) return console.error(err);
        res.render('admin',{ title: 'User List', people: person});
    });  
};

exports.loginButton = function (req, res) {
        mongoose.model('People_Collection').findOne({
            username: req.body.username
        }, 
        function(err, user) {
        if(user) {
            bcrypt.compare(req.body.password, user.password, function(err, good) {
                if(err){
                    console.log(err);
                    res.redirect('/');
                }
                console.log("WHY" + good);
                    if(good) {
                        if(user.userlevel == 'Admin') {
                            console.log("BEFORE");
                            res.redirect('/layout',{authorized: true, isAdmin:true});
                            console.log("AFTER");
                            res.redirect('/admin');
                            //set isAdmin = true
                        } else {
                            res.redirect('/edit/' + user.id);
                            //set authorized = true;
                        }
                }
            })
        } else {
            res.redirect('/');
        }
    });
};

exports.login = function (req, res) {
    Person.find(function (err, person) {
        if (err) return console.log("INVALID LOGIN");
        res.render('login',{ title: 'Login', people: person});
    });
};