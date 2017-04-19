function MoleGame(){
  this.board = 0;
  this.holes = ["hole0", "hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7", "hole8", "hole9", "hole10"];
  this.images = ["dugtrio", "hans", "minion1", "minion2", "minion3", "topo1", "topo2", "topo3"];
  this.onGoing = false;
  this.level = "easy";
  this.score = 0;
  this.intervalTime = 4000;

  this._setHoles();
}

MoleGame.prototype._setHoles = function(){
  $("#field").html("");
  this.holes.forEach(function(element){
    $("#field").append("<div class=\"hole\" id=\"" + element + "\"></div>");
  });
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

MoleGame.prototype._getRandomImage = function(){
  return this.images[Math.floor(Math.random()*this.images.length)];
};

MoleGame.prototype.setDifficulty = function(level){
  switch(level){
    case "easy":
      this.holes = ["hole0", "hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7", "hole8", "hole9", "hole10"];
      this._setHoles();
      this.intervalTime = 4000;
      break;
    case "medium":
      this.holes = ["hole0", "hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7", "hole8", "hole9", "hole10", "hole11", "hole12"];
      this._setHoles();
      this.intervalTime = 3000;
      break;
    case "hard":
    this.holes = ["hole0", "hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7", "hole8", "hole9", "hole10", "hole11", "hole12", "hole13", "hole14", "hole15", "hole16"];
    this._setHoles();
    this.intervalTime = 2000;
    break;
  }
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
    $("#"+e).css("background-image", "url(\"./images/"+that._getRandomImage()+".png\")");
  });
  auxArray = [];
  var intervalId2 = setInterval(function(){
    that.deactivateHolesTimer();
    clearInterval(intervalId2);
  }, this.intervalTime/2);
};

MoleGame.prototype.deactivateHolesClicking = function(holeId){
  $("#"+holeId).css("background-image", "none");
  $("#"+holeId).removeClass("active");
};

MoleGame.prototype.deactivateHolesTimer = function(){
  $(".active").css("background-image", "none");
  $(".active").removeClass("active");
};

MoleGame.prototype.finishGame = function(){
  this.onGoing = false;
};
