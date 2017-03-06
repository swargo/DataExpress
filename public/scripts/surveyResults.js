var c = document.getElementById("barGraph");
var ctx = c.getContext("2d");

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
ctx.fillRect(50,(10-cats)*10,50,100);
ctx.fillStyle="black";
ctx.fillText("Cats",50,100);
ctx.fill();

//dogs
ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(110,(10-dogs)*10,50,100);
ctx.fillStyle="black";
ctx.fillText("Dogs",110,100);
ctx.fill();

//male
ctx.beginPath();
ctx.fillStyle="green";
ctx.fillRect(300,(10-male)*10,50,100);
ctx.fillStyle="black";
ctx.fillText("Male",300,100);
ctx.fill();

//female
ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(360,(10-female)*10,50,100);
ctx.fillStyle="black";
ctx.fillText("Female",360,100);
ctx.fill();

//other
ctx.beginPath();
ctx.fillStyle="blue";
ctx.fillRect(420,(10-other)*10,50,100);
ctx.fillStyle="black";
ctx.fillText("Other",420,100);
ctx.fill();

//employed
ctx.beginPath();
ctx.fillStyle="green";
ctx.fillRect(610,(10-employed)*10,50,100);
ctx.fillStyle="black";
ctx.fillText("Employed",610,100);
ctx.fill();

//unemployed
ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(670,(10-unemployed)*10,50,100);
ctx.fillStyle="black";
ctx.fillText("Unemployed",670,100);
ctx.fill();
