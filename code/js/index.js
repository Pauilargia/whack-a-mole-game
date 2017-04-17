var game;

$(document).ready(function(){
  game = new MoleGame();

  document.getElementById("start").addEventListener("click", function(){
    var intervalId1 = setInterval (function(){
      if(game.onGoing === true){
        game.activateHoles();
        game.deactivateHolesClicking();
      } else {
        clearInterval(intervalId1);
      }
    }, 4000);

    var timeoutId = setTimeout(function(){
      game.finishGame();
    }, 60000);
  });

});
