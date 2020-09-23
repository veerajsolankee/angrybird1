const Engine = Matter.Engine
 const World = Matter.World 
 const Bodies = Matter.Bodies 
 var myengine,myworld,ground;
  function setup() 
  { createCanvas(400,400);
     myengine=Engine.create();
      myworld=myengine.world;
      var option={isStatic:true}
      var opt={restitution:1} 
      ground = Bodies.rectangle(200,390,400,10,option);
       World.add(myworld,ground);
       ball = Bodies.circle(100,200,20,opt)
       World.add(myworld,ball);
       

       console.log(ground.position.x);
        console.log(ground.position.y);
       } 
       function draw() {
          background("black");
        Engine.update(myengine);
         rectMode(CENTER); 
        rect(ground.position.x,ground.position.y, 400, 20) 
        ellipseMode(CENTER)
        ellipse(ball.position.x,ball.position.y,20,20)
           drawSprites(); }
