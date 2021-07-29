class Hammer{
     constructor(x,y){
          var option={
               'restitution' : 0.5,
               'friction': 1.0,
               'density': 2.0
           }
           this.body=Bodies.rectangle(x,y,50,50,option);
           World.add(world,this.body);
           
           this.width=70;
           this.height=20;
     }
     display()
    {
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();     
    }
}