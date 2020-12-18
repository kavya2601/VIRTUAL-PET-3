class Food {
    constructor(){
   this.foodStock = 0 ;
   this.image = loadImage("Milk.png");
   this.lastFed = 0;

    }
    getFoodStock()
    {
      return this.foodStock;
    }
    updateFoodStock(FoodStock)
    {
      this.foodStock = foodStock;
    }
    deductFood()
    {
       if(this.foodStock>0){
         this.foodStock = foodStock - 1;
       }
    }
    bedroom(){
      background(bedroomDog , 550 , 500);
    }
    garden(){
      background(gardenDog , 550 , 500);
    }
    washroom(){
      background(washroomDog , 550 , 500);
    }
  display()
  {
    var x = 80 , y=100;
    imageMode(CENTER);
    image(this.image , 720 , 220 , 70 , 70);

    if(this.foodStock!=0){
      for(var i =0;i<this.foodStock;i++){
        if(i%10===0){
          x=80;
          y=y+50;
        }
        image(this.image , x , y , 50 , 50);
        x=x+30;
      }
    }
  }
}
