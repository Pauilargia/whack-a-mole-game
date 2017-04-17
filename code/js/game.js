function MoleGame(){
  this.board = 0;
  this.holes = ["hole0", "hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7"];
  this.moles = 0;
  this.onGoing = true;

  this._setHoles();
}

MoleGame.prototype._setHoles = function(){
  this.holes.forEach(function(element){
    $("#field").append("<div class=\"hole\" id=\"" + element + "\"></div>");
  });
};

MoleGame.prototype.activateHoles = function(){
  var that = this;
  var howManyHoles = this._chooseNumberOfHoles();
  var auxArray = [];
  this.holes.forEach(function(hole){
    auxArray.push(hole);
  });
  auxArray = this._chooseHoles(auxArray, howManyHoles);
  auxArray.forEach(function(e){
    $("#"+e).addClass("active");
  });
  auxArray = [];
  var intervalId2 = setInterval(function(){
    that.deactivateHolesTimer();
    clearInterval(intervalId2);
  }, 2000);
};

MoleGame.prototype.deactivateHolesClicking = function(){
  $(".active").on("click", function(e){
    $(e.currentTarget).removeClass("active");
  });
};

MoleGame.prototype.deactivateHolesTimer = function(){
  $(".active").removeClass("active");
};

MoleGame.prototype._chooseNumberOfHoles = function(){
  return Math.ceil(Math.random()*5);
};

MoleGame.prototype._chooseHoles = function(array, number){
  var index;
  var secondAuxArray = [];
  for(var i=0; i<number; i++){
    index = Math.floor(Math.random()*array.length);
    secondAuxArray.push(array.splice(index, 1)[0]);
  }
  return secondAuxArray;
};

MoleGame.prototype.finishGame = function(){
  this.onGoing = false;
};
