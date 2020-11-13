class Bird extends baseclass{
    constructor(x, y) {
    super(x,y,70,70);
    this.image = loadImage("sprites/bird.png");
     }
     display(){
       super.display();
     }
  }