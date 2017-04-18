var game;

function clicking(){
  $(".hole").on("click", function(e){
    console.log("click");
    if (e.currentTarget.classList[1] === "active"){
      game.deactivateHolesClicking(e.currentTarget.id);
      game.score++;
      document.getElementById("points").innerHTML = game.score;
    }
  });
}

$(document).ready(function(){
  game = new MoleGame();
  document.getElementById("points").innerHTML = game.score;

  clicking();

  $("#easy").on("click", function(e){
    if(game.onGoing===false){
      game.setDifficulty("easy");
      clicking();
    }
  });
  $("#medium").on("click", function(e){
    if(game.onGoing===false){
      game.setDifficulty("medium");
      clicking();
    }
  });
  $("#hard").on("click", function(e){
    if(game.onGoing===false){
      game.setDifficulty("hard");
      clicking();
    }
  });

  document.getElementById("start").addEventListener("click", function(){
    if(game.onGoing===false){
      game.onGoing = true;
      game.score = 0;
      document.getElementById("points").innerHTML = game.score;
      var intervalId1 = setInterval (function(){
        if(game.onGoing === true){
          game.activateHoles();
        } else {
          clearInterval(intervalId1);
        }
      }, game.intervalTime);

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
        clearTimeout(timeoutIdTurn);
      }, 60000);
    }
  });

});
