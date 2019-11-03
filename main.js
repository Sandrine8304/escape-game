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
  },
  win: function() {
    clearInterval(this.interval);
    console.log("You Won!");
  },
  lose: function() {
    clearInterval(this.interval);
    console.log("You Lost! GAME OVER :(");
  }
};


//Jeu demarre au niveau 1 et va jusqu'au niveau 7 ; il y aura 7 niveaux au total
//niveau 1 = 1 obstacle, niveau 2 = 2 obstacles, ... niveau 7 = 7 obstacles
var level = 2;
var nextLevel = true;
var ghostsArray = [];

for (let i=0 ; i<level ; i++) {
  var ghost = new YellowGhost();
  ghostsArray[i] = ghost;
}

//creation du player indiqué par les chaussures
var player = new Player();
var playerDown = new PlayerDown(); //pour avoir les pas vers le bas
var playerLeft = new PlayerLeft(); //pour avoir les pas vers la gauche
var playerRight = new PlayerRight(); //pour avoir les pas vers la droite
var positionPlayer = 'up'; //position de départ du player

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
    key.draw();

    for (let i=0 ; i<ghostsArray.length ; i++) {
      ghostsArray[i].draw(); 

      if (ghostsArray[i].catchPlayer(player)) {
        myGameArea.lose();
        myGameArea.clear();
      } 
    }  

    if (player.grabTheKey(key)) {
      myGameArea.win();
      myGameArea.clear();
      level += 1;
    }
    //return nextLevel;
}

function continueGame() {
  if (nextLevel) {
    console.log("coucou");
    myGameArea.start();
    updateGameArea();
  }
}



//start game
document.getElementById("start-btn").onclick = function() {
  myGameArea.start();
  updateGameArea(); 
  //continueGame();
};

//auto-start
//myGameArea.start();