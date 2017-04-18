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

    var secondsLeft = 59;
    var intervalIdTimer = setInterval(function () {
      document.getElementById("timer").innerHTML = "0:" + (secondsLeft < 10 ? "0" : "") + secondsLeft;
	    secondsLeft--;

      if (secondsLeft < 0) {
        clearInterval(intervalIdTimer);
      }
    }, 1000);


//     function countdown() {
//     var seconds = 60;
//     function tick() {
//         var counter = document.getElementById("counter");
//         seconds--;
//         counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//         if( seconds > 0 ) {
//             setTimeout(tick, 1000);
//         } else {
//             alert("Game over");
//         }
//     }
//     tick();
// }
//
// // start the countdown
// countdown();


    var timeoutIdTurn = setTimeout(function(){
      game.finishGame();

    }, 60000);
  });

});
