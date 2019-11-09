//creation de la clé
class Key {
    constructor() {
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;    
            const imgRatio = img.naturalWidth/img.naturalHeight;
            this.w = 40;
            this.h = this.w/imgRatio; 
            this.x = 0;
            this.y = 0;
        }
        img.src = "images/keyOK.png";
    }

    randomPos() {
      this.x = Math.ceil(Math.random() * (myGameArea.canvas.width - this.w)); //random x
      this.y = Math.ceil(Math.random() * (myGameArea.canvas.height - this.h)); //random y
    }
    
    draw() {
        var ctx = myGameArea.context;
        if (!this.img) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }  
    
    // blink() {
    //   setInterval(draw, 2000);
    // }

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
}