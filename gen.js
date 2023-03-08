var canvas;
var ctx;
var w = 1200;
var h = 600;

//imgArray = ['Layer 4.png', 'Layer 5.png', 'Layer 15.png', 'Layer 17.png', 'Layer 18.png', 'Layer 19.png', 'Layer 21.png', 'Layer 47.png', 'Layer 48 copy 2.png'];
var map = document.getElementById("map");
var airport = document.getElementById("airport");
var organ = document.getElementById("organ");
var zara = document.getElementById("zara");
var ticket = document.getElementById("ticket");
var lixi = document.getElementById("lixi");
var transfer = document.getElementById("transfer");
var bigHalf = document.getElementById("bigHalf");
var flow = document.getElementById("flow");

//var images = [map,airport,organ,zara,ticket,lixi,transfer,bigHalf,flow];
//imgs
// var map = {
//     "x": w/2,
//     "y": h/2,
//     "w": 20,
//     "h": 35,
//     "a": 0.7,
//     "img": 'Layer 4.png',
// }
// var c = {
//     "x": w/2,
//     "y": h/2,
//     "r": 40,
//     "c": 50,
//     "a": 1,
// }
setUpCanvas();

window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var map = document.getElementById("map");
    var airport = document.getElementById("airport");
    var organ = document.getElementById("organ");
    var zara = document.getElementById("zara");
    var ticket = document.getElementById("ticket");
    var lixi = document.getElementById("lixi");
    var transfer = document.getElementById("transfer");
    var bigHalf = document.getElementById("bigHalf");
    var flow = document.getElementById("flow");

    var images = [map,airport,organ,zara,ticket,lixi,transfer,bigHalf,flow];

var o1 = {
    "x": w/2,
    "y": h/2,
    "w": 1200,
    "h": 600,
    "c": Math.floor(Math.random()*360),
    "s": Math.floor(Math.random()*100),
    "l": Math.floor(Math.random()*50+50),
    "a": Math.random()
};
function rect(o){
    var x = o.x;
    var y = o.y;
    o.x = o.x-o.w/2;
    o.y = o.y-o.h/2;
    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    ctx.lineTo(o.x+o.w,o.y);
    ctx.lineTo(o.x+o.w,o.y+o.h);
    ctx.lineTo(o.x,o.y+o.h);
    ctx.lineTo(o.x,o.y);
    ctx.fillStyle = "hsla("+o.c+",60%,80%,"+o.a+")";
    ctx.fill();
    o.x = x;
    o.y = y;
}
    //general randoms
    var result1 = Math.floor(Math.random()*9);
    var result2 = Math.floor(Math.random()*9);
    var result3 = Math.floor(Math.random()*9);
    var result4 = Math.floor(Math.random()*9);
    var result5 = Math.floor(Math.random()*9);

    //1
    var x1 = Math.floor(Math.random()*1200);
    var y1 = Math.floor(Math.random()*600);
    var w1 = Math.floor(Math.random()*500);
    var h1 = Math.floor(Math.random()*500);

    //2
    var x2 = Math.floor(Math.random()*1200);
    var y2 = Math.floor(Math.random()*600);
    var w2 = Math.floor(Math.random()*500);
    var h2 = Math.floor(Math.random()*500);

    //3
    var x3 = Math.floor(Math.random()*1200);
    var y3 = Math.floor(Math.random()*600);
    var w3 = Math.floor(Math.random()*500);
    var h3 = Math.floor(Math.random()*500);

    //4
    var x4 = Math.floor(Math.random()*1200);
    var y4 = Math.floor(Math.random()*600);
    var w4 = Math.floor(Math.random()*500);
    var h4 = Math.floor(Math.random()*500);

    //5
    var x5 = Math.floor(Math.random()*1200);
    var y5 = Math.floor(Math.random()*600);
    var w5 = Math.floor(Math.random()*500);
    var h5 = Math.floor(Math.random()*500);

    //flow randoms
    var xF = Math.floor(Math.random()*-100);
    var yF = Math.floor(Math.random()*-100);
    var wF = Math.floor(Math.random()*600+500);
    var hF = Math.floor(Math.random()*1000+500);

    //bigHalf randoms
    var xB = Math.floor(Math.random()*1000);
    var yB = Math.floor(Math.random()*-500);
    var wB = Math.floor(Math.random()*400+200);
    var hB = Math.floor(Math.random()*100+300);

for(var i=0;i<8;i++){
    rect(o1);
    ctx.drawImage(flow,xF,yF,wF,hF);
    ctx.drawImage(bigHalf,xB,yB,wB,hB);
    ctx.drawImage(images[result1], x1, y1, w1, h1);
    ctx.drawImage(images[result2], x2, y2, w2, h2);
    ctx.drawImage(images[result3], x3, y3, w3, h3);
    ctx.drawImage(images[result4], x4, y4, w4, h4);
    ctx.drawImage(images[result5], x5, y5, w5, h5);
    }
};

function clear(){
    ctx.clearRect(0,0,w,h);
}

function circle(o){
    ctx.beginPath();
    ctx.arc(o.x,o.y,o.r,0,2*Math.PI);
    ctx.fillStyle = "hsla("+o.c+",100%,50%,"+o.a+")";
    ctx.fill();
}

function randn(r){
    var result = Math.random()*r - r/2;
    return result
}
function randi(r){
    var result = Math.floor(Math.random()*r);
    return result
}
function rand(r){
    var result = Math.random()*r;
    return result
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "1px solid grey";
}

console.log("module 7");