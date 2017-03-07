var c = document.getElementById("barGraph");
var ctx = c.getContext("2d");

var placement = 10;

ctx.font="18px Josefin Sans";

var cats = 10;
var dogs = 7;

var male = 6;
var female = 1;
var other = 2;

var employed = 8;
var unemployed = 2;

//cats
ctx.beginPath();
ctx.fillStyle="green";
ctx.fillRect(placement*5,(10-cats)*10,100,100);
ctx.fillStyle="black";
ctx.fillText(cats + " Cats",placement*5,100);
ctx.fill();

//dogs
ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(placement*16,(10-dogs)*10,100,100);
ctx.fillStyle="black";
ctx.fillText(dogs + " Dogs",placement*16,100);
ctx.fill();

//male
ctx.beginPath();
ctx.fillStyle="green";
ctx.fillRect(placement*30,(10-male)*10,100,100);
ctx.fillStyle="black";
ctx.fillText(male + " Males",placement*30,100);
ctx.fill();

//female
ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(placement*41,(10-female)*10,100,100);
ctx.fillStyle="black";
ctx.fillText(female + " Females",placement*41,100);
ctx.fill();

//other
ctx.beginPath();
ctx.fillStyle="blue";
ctx.fillRect(placement*52,(10-other)*10,100,100);
ctx.fillStyle="black";
ctx.fillText(other + " Others",placement*52,100);
ctx.fill();

//employed
ctx.beginPath();
ctx.fillStyle="green";
ctx.fillRect(placement*66,(10-employed)*10,100,100);
ctx.fillStyle="black";
ctx.fillText(employed + " Employed",placement*66,100);
ctx.fill();

//unemployed
ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(placement*77,(10-unemployed)*10,100,100);
ctx.fillStyle="black";
ctx.fillText(unemployed + " Unemployed",placement*77,100);
ctx.fill();
