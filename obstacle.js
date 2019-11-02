//creation obstacle

class Ghost {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
    this.img = img;    
    const imgRatio = img.naturalWidth/img.naturalHeight;
    this.w = 30;
    this.h = this.w/imgRatio; 
    this.x = Math.random()*(myGameArea.canvas.width - 20);
    this.y = Math.random()*(myGameArea.canvas.height - 20);
    this.dx = Math.ceil(Math.random()*5);
    this.dy = Math.ceil(Math.random()*5);
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

class Pumpkin {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
    this.img = img;    
    const imgRatio = img.naturalWidth/img.naturalHeight;
    this.w = 30;
    this.h = this.w/imgRatio; 
    this.x = Math.random()*(myGameArea.canvas.width - 20);
    this.y = Math.random()*(myGameArea.canvas.height - 20);
    this.dx = Math.ceil(Math.random()*5);
    this.dy = Math.ceil(Math.random()*5);
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

