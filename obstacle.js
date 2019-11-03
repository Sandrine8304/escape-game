//creation obstacles

class YellowGhost {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 30;
      this.h = this.w/imgRatio; 
      this.x = Math.floor(Math.random()*(myGameArea.canvas.width - 30)) + 1;
      this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
      this.dx = Math.floor(Math.random()*3) + 1;
      this.dy = Math.floor(Math.random()*3) + 1;
      this.ballRadius = 30;      
    }
    img.src = "images/yellowGhost.png";
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

}


class RedGhost {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 30;
      this.h = this.w/imgRatio; 
      this.x = Math.floor(Math.random()*(myGameArea.canvas.width - 30)) + 1;
      this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
      this.dx = Math.floor(Math.random()*5) + 1;
      this.dy = Math.floor(Math.random()*5) + 1;
      this.ballRadius = 30;  
    }
    img.src = "images/ghostRed.png";
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



}


class BlueGhost {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 30;
      this.h = this.w/imgRatio; 
      this.x = Math.floor(Math.random()*(myGameArea.canvas.width - 30)) + 1;
      this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
      this.dx = Math.floor(Math.random()* -3) + 1;
      this.dy = Math.floor(Math.random()* 3) + 1;
      this.ballRadius = 30;  
    }
    img.src = "images/ghostBlue.png";
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

}


class Pumpkin {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;    
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 30;
      this.h = this.w/imgRatio; 
      this.x = Math.floor(Math.random()*(myGameArea.canvas.width - 30)) + 1;
      this.y = Math.floor(Math.random()*(myGameArea.canvas.height - this.h)) + 1;
      this.dx = Math.floor(Math.random() * 3) + 1;
      this.dy = Math.floor(Math.random() * -3) + 1;
      this.ballRadius = 30;      
    }
    img.src = "images/pumpkinsansfond.png";
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
}




