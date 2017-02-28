var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {
    
});

var animalSchema = mongoose.Schema({
    name: String,
    species: String,
    type: String,
    age: String,
    temperament: String
});


var Animal = mongoose.model('Animal_Collection', animalSchema);



exports.index = function(req, res) {
    Animal.find(function (err, animal) {
        if (err) return console.error(err);
        res.render('index',{ title: 'Animal List', animals: animal});
    });  
};

exports.create = function (req, res) {
    res.render('create');
};

exports.createAnimal = function (req, res) {
    var animal = new Animal({ name: req.body.name, species: req.body.species, type: req.body.type, age: req.body.age, temperament: req.body.temperament });
    animal.save(function (err, animal) {
    if (err) return console.error(err);
        console.log(req.body.name + ' added');
    });
   res.redirect('/');
};

exports.edit = function (req, res) {
    Animal.findById(req.params.id, function (err, animal) {
        if (err) return console.error(err);
        res.render('edit', { animal: animal });
    }); 
};

exports.editAnimal = function (req, res) {
    Animal.findById(req.params.id, function (err, animal) {
        if (err) return console.error(err);
        animal.name = req.body.name;
        animal.species = req.body.species;
        animal.type = req.body.type;
        animal.age = req.body.age;
        animal.temperament = req.body.temperament;
        animal.save(function (err, animal) {
        if (err) return console.error(err);
            console.log(req.body.name + ' updated');
        });
    }); 
    res.redirect('/');

};

exports.delete = function (req, res) {
    Animal.findByIdAndRemove(req.params.id, function (err, animal) {
        if (err) return console.error(err);
        res.redirect('/');
    }); 
};

exports.details = function (req, res) {
    Animal.findById(req.params.id, function (err, animal) {
        if (err) return console.error(err);
        res.render('details',{ title: 'Animal List', animal: animal});
    });  
};
