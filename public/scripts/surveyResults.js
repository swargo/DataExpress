var c = document.getElementById("barGraph");
var ctx = c.getContext("2d");
var routes = require('.../routes/routes.js');
person = routes.index;
function parseData(){
    for(var i = 0; i< person.length; i++){
        p = person[i].split(',');
        id = p[0].replace("\"", "").split(":")[1];
        username = p[1].replace("\"", "").split(":")[1];
        password = p[2].replace("\"", "").split(":")[1];
        userLevel = p[3].replace("\"", "").split(":")[1];
        email = p[4].replace("\"", "").split(":")[1];
        age = p[5].replace("\"", "").split(":")[1];
        console.log(username, password)
    }
}


parseData();
var placement = 12;

ctx.font="18px Josefin Sans";
var cats = 0;
var dogs = 7;

var male = 6;
var female = 1;
var other = 2;

var employed = 8;
var unemployed = 2;

//cats
ctx.beginPath();
ctx.fillStyle="#BDADE8";
ctx.fillRect(placement*5,(10-cats)*10,120,100);
ctx.fillStyle="black";
ctx.fillText(cats + " Cats",(placement*5)+5,95);
ctx.fill();

//dogs
ctx.beginPath();
ctx.fillStyle="#6B6678";
ctx.fillRect(placement*16,(10-dogs)*10,120,100);
ctx.fillStyle="black";
ctx.fillText(dogs + " Dogs",(placement*16)+5,95);
ctx.fill();

//male
ctx.beginPath();
ctx.fillStyle="#BDADE8";
ctx.fillRect(placement*30,(10-male)*10,120,100);
ctx.fillStyle="black";
ctx.fillText(male + " Males",(placement*30)+5,95);
ctx.fill();

//female
ctx.beginPath();
ctx.fillStyle="#6B6678";
ctx.fillRect(placement*41,(10-female)*10,120,100);
ctx.fillStyle="black";
ctx.fillText(female + " Females",(placement*41)+5,95);
ctx.fill();

//other
ctx.beginPath();
ctx.fillStyle="#78656D";
ctx.fillRect(placement*52,(10-other)*10,120,100);
ctx.fillStyle="black";
ctx.fillText(other + " Others",(placement*52)+5,95);
ctx.fill();

//employed
ctx.beginPath();
ctx.fillStyle="#BDADE8";
ctx.fillRect(placement*66,(10-employed)*10,120,100);
ctx.fillStyle="black";
ctx.fillText(employed + " Employed",(placement*66)+5,95);
ctx.fill();

//unemployed
ctx.beginPath();
ctx.fillStyle="#6B6678";
ctx.fillRect(placement*77,(10-unemployed)*10,120,100);
ctx.fillStyle="black";
ctx.fillText(unemployed + " Unemployed",(placement*77)+5,95);
ctx.fill();
