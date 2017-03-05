var c = document.getElementById("barGraph");
var ctx = c.getContext("2d");

ctx.rect(0, 0, 2000, 100);
ctx.fillStyle = "white";
ctx.fill();

var cats = 9;
var dogs = 7;

//cats
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="green";
ctx.rect(50,(10-cats)*10,50,100);
ctx.stroke();

//dogs
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="red";
ctx.rect(110,(10-dogs)*10,50,100);
ctx.stroke();