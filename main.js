//Jeu demarre au niveau 1 et va jusqu'au niveau 7 ; il y aura 7 niveaux au total
//niveau 1 = 1 obstacle, niveau 2 = 2 obstacles, ... niveau 7 = 7 obstacles
var level = 1;
var ghostsArray = [];
for (let i=0 ; i<3 ; i++) {
  var yellowGhost = new YellowGhost();
  var redGhost = new RedGhost();
  var blueGhost = new BlueGhost();
  var pumpkin = new Pumpkin();

  if (i === 0 || i === 5) ghostsArray[i] = yellowGhost;
  if (i === 1 || i === 4) ghostsArray[i] = blueGhost;
  if (i === 2 || i === 3) ghostsArray[i] = redGhost;
  if (i === 7) ghostsArray[i] = pumpkin;
}


//creation du player indiqué par les chaussures
var player = new Player();
var playerDown = new PlayerDown(); //pour avoir les pas vers le bas
var playerLeft = new PlayerLeft(); //pour avoir les pas vers la gauche
var playerRight = new PlayerRight(); //pour avoir les pas vers la droite
var positionPlayer = 'up'; //position de départ du player

//audio pour la clé
var keyAudio = new Audio("audio/zapsplat_multimedia_game_sound_collect_coin_single_012_40832.mp3");

//creation de la clé qui apparait dans chaque niveau
var key = new Key();

//Afficher sur le canvas si gagne ou perd
var gameOver = new GameOver();

// création du plateau de jeu
var myGameArea = {
  canvas: document.querySelector(".myCanvas"),
  start: function() {
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 20);
    level = 1;
    init();
    hideWin();


  },
  clear: function() {
   this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  nextLevel: function() {
    console.log(`You've got ${level} key(s)!`);
    init();
    displayKey();
  },
  lose: function() {
    clearInterval(this.interval);
    console.log("You Lost! GAME OVER :(");
    hideKey();
  },
  checkWin: function() {
    if (level === 4) {
      this.clear();
      clearInterval(this.interval);
      console.log("Congratulations!!! You Won!!!")
      hideKey();
      displayWin();
    }
  }
};


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


function init() {
  key.randomPos();
  player.posInitial();
  for (let i=0 ; i<level ; i++) {
    ghostsArray[i].posInitial();
  }

  //catchPlayer false
  // for (let i=0 ; i<level ; i++) {
  //   ghostsArray[i].catchPlayer(player) = false;
  // }
  
  
}

function displayKey() {
  var keyToDisplay1 = document.querySelector(".key1");
  var keyToDisplay2 = document.querySelector(".key2");
  var keyToDisplay3 = document.querySelector(".key3");
  var keyToDisplay4 = document.querySelector(".key4");
  var keyToDisplay5 = document.querySelector(".key5");
  var keyToDisplay6 = document.querySelector(".key6");
  var keyToDisplay7 = document.querySelector(".key7");
  
  if (level === 1) keyToDisplay1.classList.remove('display-none');
  if (level === 2) keyToDisplay2.classList.remove('display-none');
  if (level === 3) keyToDisplay3.classList.remove('display-none');
  if (level === 4) keyToDisplay4.classList.remove('display-none');
  if (level === 5) keyToDisplay5.classList.remove('display-none');
  if (level === 6) keyToDisplay6.classList.remove('display-none');
  if (level === 7) keyToDisplay7.classList.remove('display-none');
}

function hideKey() {
  var tabKeys = [...document.querySelectorAll(".key")];
  for (let i=0 ; i<level ; i++) {
    tabKeys[i].classList.add("display-none");
  }
  
}


function displayWin() {
  let plateauJeu = document.querySelector(".myCanvas");
  let keyWon = document.querySelector(".key-won");
  let gifWin = document.querySelector(".win");
  plateauJeu.classList.add("display-none");
  keyWon.classList.add("display-none");
  gifWin.classList.remove("display-none");
}


function hideWin() {
  let gifWin = document.querySelector(".win");
  gifWin.classList.add("display-none");
  document.querySelector(".key-won").classList.remove("display-none");
  document.querySelector(".myCanvas").classList.remove("display-none");
}


function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  key.draw();

  for (let i=0 ; i<level ; i++) {
    ghostsArray[i].draw(); 
  }
  
  for (let i=0 ; i<level ; i++) {
    if (ghostsArray[i].catchPlayer(player)) {
      myGameArea.lose();
      myGameArea.clear();
      gameOver.draw();
    } 
  }  

  if (player.grabTheKey(key)) {
    keyAudio.play();
    myGameArea.nextLevel();
    myGameArea.clear();
    level += 1;
    myGameArea.checkWin();
  }  
}


//start game
document.getElementById("start-btn").onclick = function() {
  myGameArea.start();
  updateGameArea(); 
};


//auto-start
// document.querySelector(".key-won").classList.remove("display-none");
// myGameArea.start();