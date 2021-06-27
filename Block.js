class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png");
    }
    display(){
      
      if(this.body.speed < 3){
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        }
        else{
          World.remove(world,this.body);
          push()
          tint(255,this.visibility);
          this.visibility -=5;
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop()
        }
       
          
      
     
      }
    
}