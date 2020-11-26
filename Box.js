class Box extends BaseClass{
    constructor(x, y, width, height, angle) {
      super(x, y, 30, 40);  
      this.Visibility = 255;
      }

      display(){
        if(this.body.speed < 3){
          super.display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           pop();
          
         }
    }
}
       
  