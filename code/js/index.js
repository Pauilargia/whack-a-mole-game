var game;

$(document).ready(function(){
  game = new MoleGame();
  document.getElementById("points").innerHTML = game.score;

  $("#easy").on("click", function(e){
    game.setDifficulty("easy");
  });
  $("#medium").on("click", function(e){
    game.setDifficulty("medium");
  });
  $("#hard").on("click", function(e){
    game.setDifficulty("hard");
  });

  document.getElementById("start").addEventListener("click", function(){
    var intervalId1 = setInterval (function(){
      if(game.onGoing === true){
        game.activateHoles();
        game.deactivateHolesClicking();

      } else {
        clearInterval(intervalId1);
      }
    }, 4000);

    var secondsLeft = 59;
    var intervalIdTimer = setInterval(function () {
      document.getElementById("timer").innerHTML = "0:" + (secondsLeft < 10 ? "0" : "") + secondsLeft;
	    secondsLeft--;

      if (secondsLeft < 0) {
        clearInterval(intervalIdTimer);
      }
    }, 1000);



    var timeoutIdTurn = setTimeout(function(){
      game.finishGame();

    }, 60000);
  });

});
