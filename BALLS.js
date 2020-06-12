class BALLS{
    constructor(x,y,radius){
        var balloptions = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("paper.png");
        
        this.radius=radius;
       this.body=Bodies.circle(x,y,radius,balloptions);
        World.add(world, this.body);
    }

    
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
       
        imageMode(RADIUS);
        fill("blue");
        
        image(this.image, 0,0,70,70);
         pop();
    }
    
}

  
  
  