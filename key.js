//creation de la clé
class Key {
    constructor() {
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;    
            const imgRatio = img.naturalWidth/img.naturalHeight;
            this.w = 35;
            this.h = this.w/imgRatio; 
            this.x = Math.ceil(Math.random() * (myGameArea.canvas.width - 30)); //random x
            this.y = Math.ceil(Math.random() * (myGameArea.canvas.height - 30)); //random y
        }
        img.src = "images/keyOK.png";
    }

    draw() {
        var ctx = myGameArea.context;
        if (!this.img) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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
}