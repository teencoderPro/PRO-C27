class Stone{
     constructor(x,y,width,height)
     {
         var option={
             'restitution' : 0.2,
             'friction': 0.4,
             'mass': 2.0,
             'density': 4.0
         }
         this.body=Bodies.rectangle(x,y,width,height,option);
         World.add(world,this.body);
         
         this.width=width;
         this.height=height;
     }
 
     display()
     {
         var pos=this.body.position;
         var angle=this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill("blue");
         rect(0,0,this.width,this.height);
         pop();     
     }
}