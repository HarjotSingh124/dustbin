class Line {
    constructor(x, y, height,width) {
      var options = {
      'isStatic': true
      }
      this.image=loadImage("sprites/dustbingreen.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, -80, 150, 150);
      pop();
    }
  };