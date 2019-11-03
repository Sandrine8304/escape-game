//creation class Player

class Player {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
    this.img = img;    
    const imgRatio = img.naturalWidth/img.naturalHeight;
    this.width = 30;
    this.height = this.width/imgRatio; 
    this.x = 320;
    this.y = 480;
    this.speedX = 0;
    this.speedY = 0;
    }
  
    img.src = "images/pas.png";
  }


  update() {
    var ctx = myGameArea.context;
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
        
    if (positionPlayer === "up") ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    if (positionPlayer === "down") ctx.drawImage(playerDown.img, this.x, this.y, this.width, this.height);
    if (positionPlayer === "left") ctx.drawImage(playerLeft.img, this.x, this.y, this.width, this.height);
    if (positionPlayer === "right") ctx.drawImage(playerRight.img, this.x, this.y, this.width, this.height);
  }     

  newPos(){
    this.x += this.speedX;
    if (this.x > (myGameArea.canvas.width - this.width)) this.x = (myGameArea.canvas.width - 10) - this.width;
    if (this.x < 10) this.x = 10;

    this.y += this.speedY;
    if (this.y > (myGameArea.canvas.height - this.height)) this.y = (myGameArea.canvas.height - 10) - this.height;
    if (this.y < 10) this.y = 10;     
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  grabTheKey(key) {
    return !(
      this.bottom() < key.top() ||
      this.top() > key.bottom() ||
      this.right() < key.left() ||
      this.left() > key.right()
    );
  }
  
}

class PlayerLeft {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
    this.img = img;    
    const imgRatio = img.naturalWidth/img.naturalHeight;
    this.width = 30;
    this.height = this.width/imgRatio; 
    this.x = 320;
    this.y = 480;
    this.speedX = 0;
    this.speedY = 0;
    }
  
    img.src = "images/pasLeft.png";
  }
  
}

class PlayerRight {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
    this.img = img;    
    const imgRatio = img.naturalWidth/img.naturalHeight;
    this.width = 30;
    this.height = this.width/imgRatio; 
    this.x = 320;
    this.y = 480;
    this.speedX = 0;
    this.speedY = 0;
    }
  
    img.src = "images/pasRight.png";
  }
  
}

class PlayerDown {
  
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
    this.img = img;    
    const imgRatio = img.naturalWidth/img.naturalHeight;
    this.width = 30;
    this.height = this.width/imgRatio; 
    this.x = 320;
    this.y = 480;
    this.speedX = 0;
    this.speedY = 0;
    }
  
    img.src = "images/pasBottom.png";
  }
  
}


