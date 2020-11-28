var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12;
var bullet1,bullet2,bullet3;
var wall1,wall2,wall3,thickness1,thickness2,thickness3;
var divider1,divider2,divider3;
var PLAY = 1;
var RESULT = 0;
var gameState = PLAY;
var speed1,speed2,speed3,weight1,weight2,weight3;
function setup() {
createCanvas(800,400);



//Creating bullets
bullet1 = createSprite(50, 50,10,5);
bullet2 = createSprite(50, 150,10,5);
bullet3 = createSprite(50, 250,10,5);


//Giving Speed
speed1 = random(55,90);
speed2 = random(55,90);
speed3 = random(55,90);

//Giving weight
weight1= random(400,1500);
weight2= random(400,1500);
weight3= random(400,1500);

//Giving Thickness
thickness1 = random(22,83);
thickness2 = random(22,83);
thickness3 = random(22,83);

//Speed of bullets
bullet1.velocityX=speed1;
bullet2.velocityX=speed2;
bullet3.velocityX=speed3;

//Color of bullets
bullet1.shapeColor = color("255,255,255");
bullet2.shapeColor = color("255,255,255");
bullet3.shapeColor = color("255,255,255");


//Creating Dividers
divider1 = createSprite(400,100, 800, 1);
divider2 = createSprite(400,200, 800, 1);
divider3 = createSprite(400,300, 800, 1);

//Color of Dividers
divider1.shapeColor = "white";
divider2.shapeColor = "white";
divider3.shapeColor = "white";

//Creating Walls
wall1 = createSprite(750,50,10,30);
wall2 = createSprite(750,150,10,30);
wall3 = createSprite(750,250,10,30);


//Color of Walls
wall1.shapeColor = "80,80,80";
wall2.shapeColor = "80,80,80";
wall3.shapeColor = "80,80,80";
}
function draw() {
background(0);

if (gameState === PLAY) {

if(bullet1.collide(wall1)){

var damage1 = 0.5 * weight3 * speed3 * speed3 / (thickness3*thickness3*thickness3);
if (damage1 > 10) {
bullet1.shapeColor =color(255,0,0);
}
if (damage1 < 10) {
bullet1.shapeColor = color(0,255,0);
}
}
if (bullet2.collide(wall2)) {

var damage2 = 0.5 * weight3 * speed3 * speed3 / (thickness3*thickness3*thickness3);
if (damage2 > 10) {
bullet2.shapeColor = color(255,0,0);
}
if (damage2 < 10) {
bullet2.shapeColor = color(0,255,0);
}
}
if (bullet3.collide(wall3)) {
var damage3 = 0.5 * weight3 * speed3 * speed3 / (thickness3*thickness3*thickness3);


if (damage3 > 10) {
bullet3.shapeColor = color(255,0,0);
}
if (damage3 < 10) {
bullet3.shapeColor = color(0,255,0);
}
}
}
drawSprites();
}