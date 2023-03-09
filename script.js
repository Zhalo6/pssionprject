let width = 900
let height = 800
let p1X = 450
let p1Y = 350
let p1W = 30
let p1H = 30
let stage = 0
let musicmode = 0

//Load Assets
function preload(){
  stratscreenfont = loadFont("Imports/Fonts/pricedown bl.otf")
  mainmenumusic = loadSound("Imports/Sounds/mainscreenmusic.mp3")
  level1music = loadSound("Imports/Sounds/level1music.mp3")
  //resetarrow = loadSound("Imports/Images/resetarrow.png")
}
//Setup
function setup() {
  createCanvas(width, height);
}
//Declare Functions
function draw() {
  startgame();
  playermovement();
  windowboundaries();
  startscreen();
  gamestate();
}
//Change Scenes
function gamestate(){
  if(stage == 0){
    startscreen();
    //main menu
  }
  if(stage == 1){
    startgame();
    //Level one
  }
  if(stage == 2){
    options();
    //Options
  }
}
//Start Screen
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
  //Volume Buttons
  fill('black')
  //Start Button Function
  if(mouseX > 450 - 36.5 && mouseX < 450 + 36.5 && mouseY < 275 + 20 && mouseY > 275 - 20 && mouseIsPressed == true){
    stage = 1
    musicmode = 0
    mainmenumusic.stop();
  }
  //Play Background Music
  if(stage == 0 && musicmode == 0){
  mainmenumusic.play();
  mainmenumusic.loop();
  mainmenumusic.setVolume(0.15);
    musicmode = 1
  }
  }
// Start Game
function startgame(){
  clear()
  //Background added to playerone function for simplicity.
  background(0);
  // Player One
  fill('orange')
  rect(p1X, p1Y, p1W, p1H)
  // Restart Button
  circle(30, 30, 30)
  if(mouseX > 30 - 15 && mouseX < 30 + 15 && mouseY < 30 + 15 && mouseY > 30 -15 && mouseIsPressed == true){
    stage = 0
    // Music Stops
    level1music.stop();
    // Start Menu Music
    mainmenumusic.play();
  mainmenumusic.loop();
  mainmenumusic.setVolume(0.15);
    //Reset Player
    p1X = 450
    p1Y = 350
    }
  if(stage == 1 && musicmode == 0){
    level1music.play();
    level1music.loop();
    level1music.setVolume(0.12);
    musicmode = 1
  }
  }
//Core Movement
function playermovement(){
  if (keyIsDown(87)) {
    p1Y = p1Y - 10;
  } else if (keyIsDown(83)) {
    p1Y = p1Y + 10;
  }
  if (keyIsDown(65)) {
    p1X = p1X - 10;
  } else if (keyIsDown(68)) {
    p1X = p1X + 10;
  }
}
//Core Boundaires
function windowboundaries(){
  if(p1X > width - p1W){
    p1X = p1X - 10
  }
  if(p1X < 0 + p1W){
    p1X = p1X + 10
  }
  if(p1Y < 0 + p1W){
    p1Y = p1Y + 10
  }
  if(p1Y > height - p1H){
    p1Y = p1Y - 10
  }
}