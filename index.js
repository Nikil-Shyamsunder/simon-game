redSquare = $(".red");
greenSquare = $(".green");
blueSquare = $(".blue");
yellowSquare = $(".yellow");
squares = [redSquare, greenSquare,  blueSquare, yellowSquare]

gameStarted = false;

var level;
var sequence;
var playerSequence;
var gameOver;

function start(){
  gameStarted = true;
  level = 1;
  $(".level h1").text("Level " + level);
  sequence = [];
  playerSequence = [];
  gameOver = false;

  setTimeout(function() {nextInSequence();}, 500);
}

$(".square").on("click", function(event) {
  if (!gameStarted){
    $(".square").toggleClass("grey");
    $(".instructions").toggleClass("invisible");
    start();
  }
  else if (gameOver){
    $(".square").toggleClass("grey");
    $(".level").toggleClass("game-over");
    start();
  }
  else {
    squareColor = event.target.classList[0];
    //console.log(squareColor);

    $(event.target).toggleClass("pressed");
    setTimeout(function() {$(event.target).toggleClass("pressed");}, 100);

    playerSequence.push($("."+squareColor));
    if (!checkSequence()){
      //console.log("game over!");
      gameOver = true;
      //console.log($(".level").html());
      //$(".level").html("<h1>GAME OVER</h1><h2>Click a square to restart.</h2>")
      $(".level h1").text("GAME OVER! Click a square to restart.");
      $(".level").toggleClass("game-over");
      $(".square").toggleClass("grey");
    }
    else if(playerSequence.length == sequence.length){
      $(".level h1").text("Level " + ++level); // change level displayed, and increment var
      //console.log("new level...");
      playerSequence = []; // reset player's moves
      setTimeout(function() {nextInSequence();}, 500);
      ;
    }
  }
});

function nextInSequence(){
  idx = Math.floor((Math.random() * 4));
  sequence.push(squares[idx]);
  squares[idx].fadeOut(100).fadeIn(100);
  squares[idx].fadeOut(100).fadeIn(100);
}

function checkSequence(){
  console.log("checking sequence...")
  for (var i = 0; i < playerSequence.length; i++){
    if (playerSequence[i].attr("class")[0] != sequence[i].attr("class")[0]){
      return false
    }
  }
  return true;
}

//start();

/*
$(".square").on("mouseenter", function(event) {
  $(event.target).toggleClass("transparent");
});

$(".square").on("mouseout", function(event) {
  $(event.target).toggleClass("transparent");
});*/

//nextInSequence();
/*
var isGameOver = false;
while (!isGameOver){
  nextInSequence();

}*/
