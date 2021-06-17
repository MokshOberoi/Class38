var hypnoticBall, database;
var position;
var gameState = 0 ;
var playerCount = 0 ;
var form , player , game ;
var allPlayers ;
var car1 , car2 , car3 , car4 ;
var cars ;


function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-120);

  game = new Game();
  game.getGameState();
  game.start();
  

  //var hypnoticBallPosition = database.ref('ball/position');
  //hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  //background("orange");
  if (playerCount == 4){
      game.update(1);   // update game State to Play when all players have joined

  }//Change gameState
  if (gameState == 1){
      clear();
      game.play();
      
      drawSprites();
  }

  
}
/*
function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
*/