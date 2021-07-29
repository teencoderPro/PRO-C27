class Sand {
     constructor(x,y,radius){
          var options={
               'restitution' : 1.3,
               'friction': 5.0,
               'density': 1.0
           }
           this.body= Bodies.circle(x,y,radius,options);
           this.x = x;
           this.y = y;
           this.radius = radius;
           World.add(world,this.body);
     }
     display(){
          var position=this.body.position;
          push ();
          translate (position.x,position.y);
          ellipse(0,0,this.radius,this.radius);
          pop ();
     }
}