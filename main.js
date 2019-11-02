// création du plateau de jeu
var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 650;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.querySelector("body").appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};


//creation du player indiqué par les pas / chaussures
var player = new Player();
var playerDown = new PlayerDown(); //pour avoir les pas vers le bas
var playerLeft = new PlayerLeft(); //pour avoir les pas vers la gauche
var playerRight = new PlayerRight(); //pour avoir les pas vers la droite
var positionPlayer = 'up'; //position de départ du player


//creation des obstacles : 7 niveaux donc 7 obstacles soit 1 par niveau 
var obstacle1 = new Ghost();
var obstacle2 = new Pumpkin();
var obstacle3 = new Ghost();
var obstacle4 = new Pumpkin();
var obstacle5 = new Ghost();
var obstacle6 = new Ghost();
var obstacle7 = new Pumpkin();
var level = 0;


//creation de la clé qui apparait dans chaque niveau
var key = new Key();


//mouvement du player avec les fleches
document.onkeydown = function(e) { 
  switch (e.keyCode) {
    case 38: // up arrow
      player.speedY -= 1;
      positionPlayer = 'up';
      break;
    case 40: // down arrow
      player.speedY += 1;
      positionPlayer = 'down';
      break;
    case 37: // left arrow
      player.speedX -= 1;
      positionPlayer = 'left';
      break;
    case 39: // right arrow
      player.speedX += 1;
      positionPlayer = 'right';
      break;
  }
};


document.onkeyup = function(e) {
  player.speedX = 0;
  player.speedY = 0;
};


function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  obstacle1.draw(); //creer un tableau pour redessiner tous les obstacles
  key.draw();
}


//start game
document.getElementById("start-btn").onclick = function() {
  myGameArea.start();
  updateGameArea(); 
};


// TO DO
// 1-Grab the key & go to next level : clear canvas, create nex player and n+1 ghosts
// 2-Collision with ghost, player has lost the game --> end the game + display a message "Game Over"
// Compatabiliser les wins/ keys and dislay/update the wins/keys level by level
