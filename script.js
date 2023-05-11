let width = 900
let height = 800
let p1M = 10
let p1X = 450
let p1Y = 350
let p1W = 30
let p1H = 30
let stage = 7
let playerdraw = false
let currentstage = 0
let collided = false
let trapactivate = false
let traponestatus = false
let leveractivate = false
let spikeballmovex = 10
let spikeballmovey = 10
let musicmode = true
let completionzonefive = 0
let boxtopY = false
let powerpopup = false
let powerupx = (width/2)
let powerupy = (height/2)
let takepowerup = false
let poweruptext = " "
let speedpowerup = false
let nextstagepopup = false
let nextstagex = (width/2)
let nextstagey = (height/2)
class Players{
  constructor(playerX, playerY, playerW, playerH){
    this.playerX = playerX
    this.playerY = playerY
    this.playerW = playerW
    this.playerH = playerH
  }
  draw(){
    rect(this.playerX, this.playerY, this.playerW, this.playerH)
  }
  movements(){
    if (keyIsDown(87)) {
    this.playerY = this.playerY - p1M;
  } else if (keyIsDown(83)) {
    this.playerY = this.playerY + p1M;
  }
  if (keyIsDown(65)) {
    this.playerX = this.playerX - p1M;
  } else if (keyIsDown(68)) {
    this.playerX = this.playerX + p1M;
  }
  }
  collisions(){
    if(this.playerX > 900 - 25){
      this.playerX = this.playerX - p1M
    }
    if(this.playerX < 0 + 25){
      this.playerX = this.playerX + p1M
    }
    if(this.playerY > 800 - 25){
      this.playerY = this.playerY - p1M
    }
    if(this.playerY < 0 + 25){
      this.playerY = this.playerY + p1M
    }
  }
}
let playerv1 = new Players(450, 350, 30, 30)
let playerv2 = new Players(850, 50, 30, 30)
let playerv3 = new Players(30, 770, 30, 30)
let playerv4 = new Players(200, 30, 30, 30)
let playerv5 = new Players(100, 100, 30, 30)
let playerv6 = new Players(200, 372, 30, 30)
let playerv7 = new Players(547, 0, 30, 30)
class Barrier {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  createbarrier(){
rectMode(CORNER)
rect(this.x, this.y, this.width, this.height); 
  }
  barriercollisions(playerX, playerY, playerW, playerH){
    if(playerX > this.x - playerW && playerX < this.x + this.width + playerW && playerY > this.y - playerW && playerY < this.y + this.height + playerH){
    p1M = 0
    print('dead')
    }
  }
}
let barrierone = new Barrier(0, 0, 100, 800)
let barriertwo = new Barrier(200, 0, 800, 100)
let barrierthree = new Barrier(200, 0, 100, 450)
let barrierfour = new Barrier(200, 400, 500, 150)
let barrierfive = new Barrier(550, 200, 150, 200)
let barriersix = new Barrier(100, 700, 800, 100)
let barrierseven = new Barrier(800, 100, 100, 500)
let barrierone2 = new Barrier(0, 0, 200, 800)
let barriertwo2 = new Barrier(700, 0, 100, 700)
let barrierthree2 = new Barrier(400, 600, 400, 100)
let barrierfour2 = new Barrier(200, 400, 400, 100)
let barrierfive2 = new Barrier(500, 100, 100, 300)
let barriersix2 = new Barrier(300, 0, 100, 300)
let barrierone3 = new Barrier(0, 300, 600, 400)
let barriertwo3 = new Barrier(0, 0, 600, 200)
let barrierthree3 = new Barrier(700, 100, 100, 700)
let barrierone4 = new Barrier(600, 100, 100, 400)
let barriertwo4 = new Barrier(600, 600, 100, 200)
let barrierthree4 = new Barrier(0, 100, 600, 100)
let barrierfour4 = new Barrier(200, 200, 100, 0)
let barrierone6 = new Barrier(0, 0, 900, 20)
let barriertwo6 = new Barrier(0, 0, 140, 800)
let barrierthree6 = new Barrier(0, 435, 750, 800)
let barrierfour6 = new Barrier(870, 0, 30, 800)
let barrierfive6 = new Barrier(260, 145, 490, 305)
class Box {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  createbox(){
rectMode(CORNER)
rect(this.x, this.y, this.width, this.height); 
  }
  boxcollisions(playerX, playerY, playerW, playerH){
    if(playerX > this.x - playerW && playerX < this.x + this.width + playerW && playerY > this.y - playerW){
    boxtopY = true
  }
  else {
    boxtopY = false
  }
}
}
let boxone7 = new Box(200, 400, 500, 100)
class Completion {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  createwinner(){
rectMode(CORNER)
rect(this.x, this.y, this.width, this.height); 
  }
  winnercollisions(playerX, playerY, playerW, playerH){

    if(playerX > this.x - playerW && playerX < this.x + this.width + playerW && playerY > this.y - playerW && playerY < this.y + this.height + playerH){
  nextstagepopup = true
  nextstage();
    }
  }
}
let completionone = new Completion(800, 500, 100, 100)
let completiontwo = new Completion(200, 0, 100, 100)
let completionthree = new Completion(800, 700, 100, 100)
let completionfour = new Completion(0, 700, 100, 100)
let completionfive = new Completion(800, 700, 100, 100)
let completionsix = new Completion(750, 700, 120, 100)
class Lever {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  createlever(){
rectMode(CORNER)
rect(this.x, this.y, this.width, this.height); 
  }
  levercollisions(playerX, playerY, playerW, playerH){

    if(playerX > this.x - playerW && playerX < this.x + this.width + playerW && playerY > this.y - playerW && playerY < this.y + this.height + playerH){
  leveractivate = true
    }
  }
}
let leverone = new Lever(800, 700, 100, 100)
class Powerup {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  createpowerup(){
rectMode(CORNER)
rect(this.x, this.y, this.width, this.height); 
  }
  powerupcollisions(playerX, playerY, playerW, playerH){

    if(playerX > this.x - playerW && playerX < this.x + this.width + playerW && playerY > this.y - playerW && playerY < this.y + this.height + playerH){
  powerpopup = true
    }
    else{
      powerpopup = false
    }
  }
}
let powerupone = new Powerup(100, 0, 100, 100)
let poweruptwo = new Powerup(0, 200, 100, 100)
let visionreducerp1 = 400
let visionreducerp2 = 1000
class Traps {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  createtrap(){
rectMode(CORNER)
rect(this.x, this.y, this.width, this.height); 
  }
  trapcollisions(playerX, playerY, playerW, playerH){

    if(playerX > this.x - playerW && playerX < this.x + this.width + playerW && playerY > this.y - playerW && playerY < this.y + this.height + playerH){
  trapactivate = true
    }
    else{
      trapactivate = false
    }
  }
}
let trapone = new Traps(600, 500, 100, 100)
let traptwo = new Traps(0, 0, 0, 0)
class Spikeball {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }
  createspikeball(){
circle(this.x, this.y, this.d)
  }
  spikeballcollisions(playerX, playerY, playerW, playerH){
   if(playerX > this.x - playerW - this.d/2 && playerX < this.x + playerW + this.d/2 && playerY > this.y - playerH - this.d/2 && playerY < this.y + playerH + this.d/2){
     p1M = 0
   }
    
    }
  spikeballcollisionswalls(width, height){
    if(this.x < 0 + this.d){
      spikeballmovex = spikeballmovex * -1
    }
    if(this.y < 0 + this.d){
      spikeballmovey = spikeballmovey * -1
    }
    if(this.x > width - this.d){
        spikeballmovex = spikeballmovex * -1
    }
    if(this.y > height - this.d){
      spikeballmovey = spikeballmovey * -1
    }
  }
}
let spikeballone = new Spikeball(400, 400, 60)
class Visionreducer {
  constructor(reducerX, reducerY, reducerW, reducerH) {
    this.reducerX = reducerX
    this.reducerY = reducerY
    this.reducerW = reducerW
    this.reducerH = reducerH
  }
  createreducer(reducerX, reducerY, reducerW, reducerH){
rect(this.reducerX, this.reducerY + 550, visionreducerp2,  visionreducerp1)
rect(this.reducerX, this.reducerY - 550, visionreducerp2,  visionreducerp1)
rect(this.reducerX + 550, this.reducerY,  visionreducerp1, visionreducerp2)
rect(this.reducerX - 550, this.reducerY,  visionreducerp1, visionreducerp2) 
  }
}
let reducerone = new Visionreducer(450, 350)
let reducertwo = new Visionreducer(850, 50)
let reducerthree = new Visionreducer(30, 770)
// Load Assets
function preload(){
  stratscreenfont = loadFont("Imports/Fonts/pricedown bl.otf")
  mainmenumusic = loadSound("Imports/Sounds/mainscreenmusic.mp3")
  level1music = loadSound("Imports/Sounds/level1music.mp3")
  resetarrow = loadImage("Imports/Images/resetarrow.png")
  visionrestrict = loadImage("Imports/Images/visionrestrictor.png")
}
// Setup
function setup() {
  createCanvas(width, height);
  frameRate(60)
}
// Declare Functions
function draw() {
  gamemusic();
  startgame();
  playermovement();
  windowboundaries();
  boxcollisions();
  startscreen();
  gamestate();
  levelone();
  leveltwo();
  levelthree();
  levelfour();
  levelfive();
  levelsix();
  levelseven();
  resetandvision();
  powerups();
  takepowerups();
  nextstage();
}
// Change Scenes
function gamestate(){
  //Main Menu
  if(stage == 0){
    startscreen();
  }
  //Level One
  if(stage == 1){
    startgame();
  }
  //Level two
  if(stage == 2){
    leveltwo();
  }
  //Level Three
   if(stage == 3){
    levelthree();
  }
  //Level Four
   if(stage == 4){
    levelfour();
  }
  //Level Five
   if(stage == 5){
    levelfive();
  }
  //Level Six
   if(stage == 6){
    levelsix();
  }
  //Level Seven
   if(stage == 7){
    levelseven();
  }
}
// Game Music
function gamemusic(){
  // Level Main Menu
  if(stage == 0 && musicmode == true){
  mainmenumusic.play();
  mainmenumusic.loop();
  mainmenumusic.setVolume(0.15);
  musicmode = false
  }
// Play Level 1 Music
 if(stage == 1 && musicmode == true){
  mainmenumusic.stop();
  level1music.play();
  level1music.loop();
  level1music.setVolume(0.15);
  musicmode = false
}
if(stage == 2 && musicmode == true){
 level1music.stop();
  musicmode = false
}
}
// Start Screen
function startscreen(){
  //Background
  fill('orange')
  rect(0, 0, width, height)
  //Title Screen
  textSize(66)
  textAlign(CENTER)
  textFont('startscreenfont')
  fill('black')
  text('Adventure Game', 450, 150)
  //Start Button
  rectMode(RADIUS)
  rect(450, 275, 75, 40, 30)
  textFont('startscreenfont')
  textAlign(CENTER)
  fill('orange')
  text('Start', 450, 295)
  //Start Button Function
  if(mouseX > 450 - 36.5 && mouseX < 450 + 36.5 && mouseY < 275 + 20 && mouseY > 275 - 20 && mouseIsPressed == true){
    stage = 1
    musicmode = true
    currentstage = 1 
    mainmenumusic.stop();
    trapactivate = false
  }
  }
// Start Game
function startgame(){
  clear()
  background('white');
  // Player One
  if(stage == 1){
  push();
  stroke('black')
  fill('orange')
  playerv1.draw();
  pop();
}
  }
// Core Movement
function playermovement(){
  if(stage == 1){
  playerv1.movements()
  }
  if(stage == 2){
  playerv2.movements()
  }
  if(stage == 3){
  playerv3.movements()
  }
  if(stage == 4){
  playerv4.movements()
  }
  if(stage == 5){
  playerv5.movements()
  }
  if(stage == 6){
  playerv6.movements()
  }
  if(stage == 7){
  playerv7.movements()
  }
}
// Core Boundaires
function windowboundaries(){
  if(stage >= 1){
    playerv1.collisions();
    playerv2.collisions();
    playerv3.collisions();
    playerv4.collisions();
    playerv5.collisions();
    playerv6.collisions();
    playerv7.collisions();
}
}
// Box Collisions
function boxcollisions(){
  if(boxtopY == true){
    this.playerY = this.playerY - p1M
  }
}
// Level 1
function levelone(){
  if(stage == 1){
    
    fill('red')
    push();
    noStroke();
    barrierone.createbarrier();
    barriertwo.createbarrier();
    barrierthree.createbarrier();
    barrierfour.createbarrier();
    barrierfive.createbarrier();
    barriersix.createbarrier();
    barrierseven.createbarrier();
    pop();
    push();
    noStroke();
    rectMode(CORNER)
    fill('green')
    rect(barrierseven.x, barrierseven.y + barrierseven.height, 100, 100)
    pop();
// Barrier Collisions
barrierone.barriercollisions(playerv1.playerX, playerv1.playerY, playerv1.playerW, playerv1.playerH) 
barriertwo.barriercollisions(playerv1.playerX, playerv1.playerY, playerv1.playerW, playerv1.playerH) 
barrierthree.barriercollisions(playerv1.playerX, playerv1.playerY, playerv1.playerW, playerv1.playerH) 
barrierfour.barriercollisions(playerv1.playerX, playerv1.playerY, playerv1.playerW, playerv1.playerH) 
barrierfive.barriercollisions(playerv1.playerX, playerv1.playerY, playerv1.playerW, playerv1.playerH)
barriersix.barriercollisions(playerv1.playerX, playerv1.playerY, playerv1.playerW, playerv1.playerH) 
barrierseven.barriercollisions(playerv1.playerX, playerv1.playerY, playerv1.playerW, playerv1.playerH) 
// Winner Zone One
if(playerv1.playerX > barrierseven.x - p1W && playerv1.playerY > barrierseven.y + barrierseven.height + p1H){
  nextstagepopup = true
    }
    else{
      nextstagepopup = false
    }
// Power Up 1
push();
fill('purple');
noStroke();
powerupone.createpowerup();
powerupone.powerupcollisions(playerv1.playerX, playerv1.playerY, playerv1.playerW, playerv1.playerH);
pop();
  }
}
// Level 2
function leveltwo(){
  if(stage == 2){
  push();
  fill('#fdd835')
  rect(0, 0, width, height)
  pop();
  playerv2.draw();
  push();
  noStroke();
  fill('red')
 // Draw Barriers
  barrierone2.createbarrier();
  barriertwo2.createbarrier();
  barrierthree2.createbarrier();
  barrierfour2.createbarrier();
  barrierfive2.createbarrier();
  barriersix2.createbarrier();
  pop();
// Barrier Collisions
barrierone2.barriercollisions(playerv2.playerX,playerv2.playerY,playerv2.playerW,playerv2.playerH);
barriertwo2.barriercollisions(playerv2.playerX,playerv2.playerY,playerv2.playerW,playerv2.playerH);
barrierthree2.barriercollisions(playerv2.playerX,playerv2.playerY,playerv2.playerW,playerv2.playerH);
barrierfour2.barriercollisions(playerv2.playerX,playerv2.playerY,playerv2.playerW,playerv2.playerH);
barrierfive2.barriercollisions(playerv2.playerX,playerv2.playerY,playerv2.playerW,playerv2.playerH);
barriersix2.barriercollisions(playerv2.playerX,playerv2.playerY,playerv2.playerW,playerv2.playerH);
// Winner Zone Two
push();
fill('green')
noStroke();
completiontwo.createwinner();
completiontwo.winnercollisions(playerv2.playerX, playerv2.playerY, playerv2.playerW,playerv2.playerH);
pop();
  }
}
// Level 3
function levelthree(){
  if(stage == 3){
    push();
    fill('#ffc1cc')
    rect(0, 0, width, height)
    pop();
    playerv3.draw();
    push();
    fill('red')
    noStroke();
    // Draw Barriers
    barrierone3.createbarrier();
    barriertwo3.createbarrier();
    barrierthree3.createbarrier();
    pop();
    //Barrier Collisions
    barrierone3.barriercollisions(playerv3.playerX, playerv3.playerY, playerv3.playerW, playerv3.playerH);
    barriertwo3.barriercollisions(playerv3.playerX, playerv3.playerY, playerv3.playerW, playerv3.playerH);
    barrierthree3.barriercollisions(playerv3.playerX, playerv3.playerY, playerv3.playerW, playerv3.playerH);
    // Power Up 2
push();
fill('purple');
noStroke();
poweruptwo.createpowerup();
poweruptwo.powerupcollisions(playerv3.playerX, playerv3.playerY, playerv3.playerW, playerv3.playerH);
pop();
// Winner Zone 3
push();
fill('green')
noStroke();
completionthree.createwinner();
completionthree.winnercollisions(playerv3.playerX, playerv3.playerY, playerv3.playerW,playerv3.playerH);
pop();
  }
}
// Level 4
function levelfour(){
if(stage == 4){
  push();
  fill('#394361')
  rect(0, 0, width, height)
  pop();
  playerv4.draw();
  // Draw Barriers
  push();
  noStroke();
  fill('red')
  barrierone4.createbarrier();
  barriertwo4.createbarrier();
  barrierthree4.createbarrier();
  barrierfour4.createbarrier();
  pop();
  // Barrier Collisions
  barrierone4.barriercollisions(playerv4.playerX, playerv4.playerY, playerv4.playerW, playerv4.playerH);
  barriertwo4.barriercollisions(playerv4.playerX, playerv4.playerY, playerv4.playerW, playerv4.playerH);
  barrierthree4.barriercollisions(playerv4.playerX, playerv4.playerY, playerv4.playerW, playerv4.playerH);
  barrierfour4.barriercollisions(playerv4.playerX, playerv4.playerY, playerv4.playerW, playerv4.playerH);
  // Trap One
push();
noStroke();
//trapone.createtrap();
trapone.trapcollisions(playerv4.playerX, playerv4.playerY, playerv4.playerW, playerv4.playerH);
pop();
if(stage == 4 && trapactivate == true){
playerv4.playerX = 400
traponestatus = true
trapactivate == false
}
if(traponestatus == true){
  barrierfour4.height = 600
  barrierone4.height = 500
}
else if(traponestatus == false){
  barrierfour4.height = 0
  barrierone4.height = 400
}
// Lever One
  push();
  fill(34, 139, 34, 15)
  noStroke();
leverone.createlever();
  pop();
leverone.levercollisions(playerv4.playerX, playerv4.playerY, playerv4.playerW, playerv4.playerH)
if(stage == 4 && leveractivate == true){
  barrierthree4.x = 100
}
if(stage == 4 && leveractivate == false){
  barrierthree4.x = 0
}
// Winner Zone 4
push();
fill('green')
noStroke();
completionfour.createwinner();
completionfour.winnercollisions(playerv4.playerX, playerv4.playerY, playerv4.playerW, playerv4.playerH);
pop();
}
}
// Leve 5
function levelfive(){
  if(stage == 5){
  push();
  fill('#880808')
  rect(0, 0, width, height)
  pop();
  playerv5.draw();
  // Spike Ball
  push();
  fill('red')
  spikeballone.createspikeball();
  pop();
  // Spike Ball Movement
  spikeballone.x = spikeballone.x + spikeballmovex
  spikeballone.y = spikeballone.y + spikeballmovey  
  // Spike Ball Collisions
  spikeballone.spikeballcollisions(playerv5.playerX, playerv5.playerY, playerv5.playerW, playerv5.playerH);
  spikeballone.spikeballcollisionswalls(width, height)
  // Winner Zone 5
push();
fill('green')
noStroke();
rectMode(CORNER)
rect(800, 700, 100, 100)
rect(800, 0, 100, 100)
rect(0, 700, 100, 100)
completionfive.createwinner();
completionfive.winnercollisions(playerv5.playerX, playerv5.playerY, playerv5.playerW, playerv5.playerH);
pop();
  // Trap Two
  push();
  fill('black')
  noStroke();
  traptwo.createtrap();
  pop();
   traptwo.trapcollisions(playerv5.playerX, playerv5.playerY, playerv5.playerW, playerv5.playerH);
  if(stage == 5){
    traptwo.width = traptwo.width + 5.125
    traptwo.height = traptwo.height + 5
  }  
  if(stage == 5 && trapactivate == true){
    p1M = 0
  }
if(completionzonefive == 1){
  completionfive.x = 800
  completionfive.y = 700
}
if(completionzonefive == 2){
  completionfive.x = 800
  completionfive.y = 0
}
if(completionzonefive == 3) {
  completionfive.x = 0
  completionfive.y = 700
}
print(completionzonefive)
}
}
// Leve 6
function levelsix(){
  if(stage == 6){
  //background
  push();
  fill('#808080')
  rect(0, 0, width, height)
  pop();
  //Player
  Players.playerW = 60
  Players.playerH = 60
  playerv6.playerW = 60
  playerv6.playerH = 60
  playerv6.draw();
  // Draw Barriers
  push();
  fill('red')
  noStroke();
  barrierone6.createbarrier();
  barriertwo6.createbarrier();
  barrierthree6.createbarrier();
  barrierfour6.createbarrier();
  barrierfive6.createbarrier(); 
  pop();
  // Barrier Collisions
  barrierone6.barriercollisions(playerv6.playerX, playerv6.playerY, playerv6.playerW, playerv6.playerH);
  barriertwo6.barriercollisions(playerv6.playerX, playerv6.playerY, playerv6.playerW, playerv6.playerH);
  barrierthree6.barriercollisions(playerv6.playerX, playerv6.playerY, playerv6.playerW, playerv6.playerH);
  barrierfour6.barriercollisions(playerv6.playerX, playerv6.playerY, playerv6.playerW, playerv6.playerH);  
  barrierfive6.barriercollisions(playerv6.playerX, playerv6.playerY, playerv6.playerW, playerv6.playerH); 
  // Winner Zone 6
push();
fill('green')
noStroke();
completionsix.createwinner();
completionsix.winnercollisions(playerv6.playerX, playerv6.playerY, playerv6.playerW, playerv6.playerH);
pop();
}
}
// Level 7
function levelseven(){
  if(stage == 7){
  // Background
  push();
  fill('#228B22')
  rect(0, 0, width, height)
  pop();
  // Player
  playerv7.draw();
  // Boxes
  push();
  fill('#EDDA74')
  boxone7.createbox();
  pop();
  // Box Collisions
    boxone7.boxcollisions(playerv7.playerX, playerv7.playerY, playerv7.playerW, playerv7.playerH);
}
}
//Death Screen
function levelfail(){
  if(collided == true){
    fill('orange')
  circle(30, 30, 30)
  image(resetarrow, 30, 30, 18, 18)
  if(mouseX > 30 - 15 && mouseX < 30 + 15 && mouseY < 30 + 15 && mouseY > 30 - 15 && mouseIsPressed == true){
    stage = currentstage

    }
  }
}
// Reset to main menu and reduce vision
function resetandvision(){
  if(stage >= 1){
  imageMode(CENTER)
  if(stage == 1){
  image(visionrestrict, playerv1.playerX, playerv1.playerY)
  push();
  fill('black')
  reducerone.createreducer();
  pop();
  reducerone.reducerX = playerv1.playerX
  reducerone.reducerY = playerv1.playerY
  }
  if(stage == 2){
  image(visionrestrict, playerv2.playerX, playerv2.playerY)
  push();
  fill('black')
  reducertwo.createreducer();
  pop();
  reducertwo.reducerX = playerv2.playerX
  reducertwo.reducerY = playerv2.playerY
}
  if(stage == 3){
  image(visionrestrict, playerv3.playerX, playerv3.playerY)
  push();
  fill('black')
  reducerthree.createreducer();
  pop();
  reducerthree.reducerX = playerv3.playerX
  reducerthree.reducerY = playerv3.playerY
}
    
  // Restart Button
  fill('grey')
  circle(30, 30, 30)
  image(resetarrow, 30, 30, 18, 18)
  if(mouseX > 30 - 15 && mouseX < 30 + 15 && mouseY < 30 + 15 && mouseY > 30 - 15 && mouseIsPressed == true){
    playerv1.PlayerX = 450
    playerv1.PlayerY = 350
    p1M = 10
    //Reset Player
    playerv1.playerX = 450
    playerv1.playerY = 350
    playerv2.playerX = 850
    playerv2.playerY = 50
    playerv3.playerX = 30
    playerv3.playerY = 770
    playerv4.playerX = 200
    playerv4.playerY = 30
    playerv5.playerX = 100
    playerv5.playerY = 100
    playerv6.playerX = 200
    playerv6.playerY = 372
    playerv7.playerX = 547
    playerv7.playerY = 0
    // Disable Traps
    trapactivate = false
    traponestatus = false
    traptwo.width = 0
    traptwo.height = 0
    // Power Ups
    takepowerup = false
    // Levers
    leveractivate = false
    // Random Completion Zones
    completionzonefive = int(random(1, 4))
    }
  }
}
// Powerups
function powerups(){
  if(powerpopup == true){
  push();
  rectMode(CENTER)
  fill('black')
  stroke('white')
  strokeWeight(20)
  rect(powerupx, powerupy, 400, 200, 40)
  pop();
  push();
  stroke('white')
  fill('white')
  textAlign(CENTER)
  textSize(40)
  text(poweruptext, powerupx, powerupy - 40)
  pop();
  push();
  stroke('white')
  strokeWeight(5)
  fill('black')
  rect(powerupx - 75, powerupy + 20, 60, 30, 20)
  rect(powerupx + 75, powerupy + 20, 60, 30, 20)
  pop();
  push();
  stroke('white')
  fill('white')
  textAlign(CENTER)
  textSize(40)
  text('Take', powerupx - 75, powerupy + 30)
  text('Leave', powerupx + 75, powerupy + 30)
  pop();
  if(mouseX > powerupx - 75 - 30 && mouseX < powerupx - 75 + 30 && mouseY > powerupy + 20 - 15 && powerupy + 20 + 15 && mouseIsPressed == true){
    takepowerup = true
    powerpopup = false
  }
 if(mouseX > powerupx + 75 - 30 && mouseX < powerupx + 75 + 30 && mouseY > powerupy + 20 - 15 && powerupy + 20 + 15 && mouseIsPressed == true){
    powerpopup = false
  }
  
  }
}
// Take powerups
function takepowerups(){
  if(stage == 1){
    poweruptext = ('Speed Up')
  }
  if(stage == 1 && takepowerup == true && powerpopup == true){
    p1M = 20
    playerv1.playerY = playerv1.playerY + 10
  }
  if(stage == 1 && p1M == 20){
    poweruptext = (' Already Taken')
  }
  if(stage == 3){
    poweruptext = ('Slow Down')
  }
  if(stage == 3 && takepowerup == true && powerpopup == true){
    p1M = 5
    playerv3.playerX = playerv3.playerX + 10
  }
  if(stage == 3 && p1M == 5){
    poweruptext = (' Already Taken')
  }
}
// Next Stage Pop Up
function nextstage(){
  if(nextstagepopup == true){
  push();
  rectMode(CENTER)
  fill('black')
  stroke('white')
  strokeWeight(20)
  rect(nextstagex, nextstagey, 400, 200, 40)
  pop();
  push();
  stroke('white')
  fill('white')
  textAlign(CENTER)
  textSize(40)
  text('Next Level?', nextstagex, nextstagey - 40)
  pop();
  push();
  stroke('white')
  strokeWeight(5)
  fill('black')
  rect(nextstagex - 75, nextstagey + 20, 60, 30, 20)
  rect(nextstagex + 75, nextstagey + 20, 60, 30, 20)
  pop();
  push();
  stroke('white')
  fill('white')
  textAlign(CENTER)
  textSize(40)
  text('Yes', nextstagex - 75, nextstagey + 30)
  text('No', nextstagex + 75, nextstagey + 30)
  pop();
  if(mouseX > nextstagex - 75 - 30 && mouseX < nextstagex - 75 + 30 && mouseY > nextstagey + 20 - 15 && nextstagey + 20 + 15 && mouseIsPressed == true){
    playerdraw = true
    musicmode = true
    stage = stage + 1
    currentstage = currentstage + 1
    nextstagepopup = false
    takepowerup = false
    trapactivate = false
    leveractivate = false
  }
 if(mouseX > nextstagex + 75 - 30 && mouseX < nextstagex + 75 + 30 && mouseY > nextstagey + 20 - 15 && nextstagey + 20 + 15 && mouseIsPressed == true){
    nextstagepopup = false
  }
  
  }
}