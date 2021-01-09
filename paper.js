class paper {
    constructor (x,y){
    var options={
        'restitution':0,
        'friction':0,
        'density':1
    }
    this.image=loadImage("sprites/paper.png")
    this.body = Bodies.circle(x, y, 40, options);
    World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          imageMode(CENTER);
          image(this.image,+20, +20,40,40);
          pop();
        }
      };