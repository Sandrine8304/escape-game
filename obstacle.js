//creation obstacles

class YellowGhost {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 30;
      this.h = this.w/imgRatio; 
      this.x = Math.floor(Math.random()*(myGameArea.canvas.width - this.w)) + 1;
      this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
      this.dx = Math.floor(Math.random()*3) + 1;
      this.dy = Math.floor(Math.random()*3) + 1;
      this.ballRadius = 30;      
    }
    img.src = "images/yellowGhost.png";
  }

  posInitial() {
    this.x = Math.floor(Math.random()*(myGameArea.canvas.width - this.w)) + 1;
    this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
    this.dx = Math.floor(Math.random()*3) + 1;
    this.dy = Math.floor(Math.random()*3) + 1;
  }

  drawObstacle() {
    var ctx = myGameArea.context;
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }     

  draw() {
    this.drawObstacle();
    if (((this.x + this.dx) > (myGameArea.canvas.width - this.ballRadius)) || ((this.x + this.dx) < this.ballRadius)) {
      this.dx = -this.dx;
    }
    if (((this.y + this.dy) > (myGameArea.canvas.height - this.ballRadius)) || ((this.y + this.dy) < this.ballRadius)) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }

  catchPlayer(player) {
    return !(
      this.bottom() < player.top() ||
      this.top() > player.bottom() ||
      this.right() < player.left() ||
      this.left() > player.right()
    );
  }

}


class RedGhost {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 30;
      this.h = this.w/imgRatio; 
      this.x = Math.floor(Math.random()*(myGameArea.canvas.width - this.w)) + 1;
      this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
      this.dx = Math.floor(Math.random()*5) + 1;
      this.dy = Math.floor(Math.random()*5) + 1;
      this.ballRadius = 30;  
    }
    img.src = "images/ghostRed.png";
  } 

  posInitial() {
    this.x = Math.floor(Math.random()*(myGameArea.canvas.width - this.w)) + 1;
    this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
    this.dx = Math.floor(Math.random()*5) + 1;
    this.dy = Math.floor(Math.random()*5) + 1;
  }

  drawObstacle() {
    var ctx = myGameArea.context;
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }     

  draw() {
    this.drawObstacle();
    if (((this.x + this.dx) > (myGameArea.canvas.width - this.ballRadius)) || ((this.x + this.dx) < this.ballRadius)) {
      this.dx = -this.dx;
    }
    if (((this.y + this.dy) > (myGameArea.canvas.height - this.ballRadius)) || ((this.y + this.dy) < this.ballRadius)) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }

  catchPlayer(player) {
    return !(
      this.bottom() < player.top() ||
      this.top() > player.bottom() ||
      this.right() < player.left() ||
      this.left() > player.right()
    );
  }
}


class BlueGhost {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 30;
      this.h = this.w/imgRatio; 
      this.x = Math.floor(Math.random()*(myGameArea.canvas.width - this.w)) + 1;
      this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
      this.dx = Math.floor(Math.random()* 3) + 1;
      this.dy = Math.floor(Math.random()* 3) + 1;
      this.ballRadius = 30;  
    }
    img.src = "images/ghostBlue.png";
  } 

  posInitial() {
    this.x = Math.floor(Math.random()*(myGameArea.canvas.width - this.w)) + 1;
    this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
    this.dx = Math.floor(Math.random()*3) + 1;
    this.dy = Math.floor(Math.random()*3) + 1;
  }

  drawObstacle() {
    var ctx = myGameArea.context;
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }     

  draw() {
    this.drawObstacle();
    if (((this.x + this.dx) > (myGameArea.canvas.width - this.ballRadius)) || ((this.x + this.dx) < this.ballRadius)) {
      this.dx = -this.dx;
    }
    if (((this.y + this.dy) > (myGameArea.canvas.height - this.ballRadius)) || ((this.y + this.dy) < this.ballRadius)) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }

  catchPlayer(player) {
    return !(
      this.bottom() < player.top() ||
      this.top() > player.bottom() ||
      this.right() < player.left() ||
      this.left() > player.right()
    );
  }

}

class Pumpkin {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 30;
      this.h = this.w/imgRatio; 
      this.x = Math.floor(Math.random()*(myGameArea.canvas.width - this.w)) + 1;
      this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
      this.dx = Math.floor(Math.random() * -3) + 1;
      this.dy = Math.floor(Math.random() * 3) + 1;
      this.ballRadius = 30;      
    }
    img.src = "images/pumpkinsansfond.png";
  }

  posInitial() {
    this.x = Math.floor(Math.random()*(myGameArea.canvas.width - this.w)) + 1;
    this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
    this.dx = Math.floor(Math.random()*-3) + 1;
    this.dy = Math.floor(Math.random()*3) + 1;
  }

  drawObstacle() {
    var ctx = myGameArea.context;
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }     

  draw() {
    this.drawObstacle();
    if (((this.x + this.dx) > (myGameArea.canvas.width - this.ballRadius)) || ((this.x + this.dx) < this.ballRadius)) {
      this.dx = -this.dx;
    }
    if (((this.y + this.dy) > (myGameArea.canvas.height - this.ballRadius)) || ((this.y + this.dy) < this.ballRadius)) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }

  catchPlayer(player) {
    return !(
      this.bottom() < player.top() ||
      this.top() > player.bottom() ||
      this.right() < player.left() ||
      this.left() > player.right()
    );
  }
}

class GameOver{
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = myGameArea.canvas.width;
      this.h = this.w/imgRatio; 
      this.x = 0;
      this.y = 0;     
    }
    img.src = "images/game-over.jpg";
  }

  draw() {
    var ctx = myGameArea.context;
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }  

}


