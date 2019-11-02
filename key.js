//creation de la clé
class Key {
    constructor() {
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;    
            const imgRatio = img.naturalWidth/img.naturalHeight;
            this.w = 45;
            this.h = this.w/imgRatio; 
            this.x = (Math.random() * 620); //random x
            this.y = (Math.random() * 450); //random y
        }
        img.src = "images/keyOK.png";
    }

    draw() {
        var ctx = myGameArea.context;
        if (!this.img) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }   
}