var game;

function clicking(){
  $(".hole").on("click", function(e){
    if (e.currentTarget.classList[1] === "active"){
      switch ($("#"+e.currentTarget.id).attr("style")) {
        case "background-image: url(\"./images/minion2.png\");":
          game.score+=10;
          break;
        case "background-image: url(\"./images/minion1.png\");":
        case "background-image: url(\"./images/minion3.png\");":
        case "background-image: url(\"./images/minion4.png\");":
          game.score+=5;
          break;
        case "background-image: url(\"./images/dugtrio.png\");":
          game.score--;
          break;
        case "background-image: url(\"./images/hans.png\");":
          game.score=0;
          showGameOver();
          game.finishGame();
          break;
        default:
          game.score++;
      }
      game.deactivateHolesClicking(e.currentTarget.id);
      document.getElementById("points").innerHTML = game.score;
    }
  });
}

function showGameOver(){
  $("#game-over").show();
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
      $("#game-over").hide();
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

        if(secondsLeft===30){
          $("#end-of-game").addClass("nyan");
          document.getElementsByTagName("audio")[0].play();
        }
        else if(secondsLeft===25){ $("#end-of-game").removeClass("nyan");}

        else if ((secondsLeft < 0)||(game.onGoing===false)) {
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
