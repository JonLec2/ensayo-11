class Form{
    constructor(){
        this.button=createButton('Start')
     
    }

    hide(){
        this.button.hide();
      }

display(){
    
 
 this.button.position(displayWidth/2-85 , displayHeight/2-30);
 this.button.style('background', 'Teal');
 this.button.style('font-size', '100px');
 this.button.style('color', 'white');
 

this.button.mousePressed(()=>{
   this.button.hide();
    playerCount+=1;
    console.log(playerCount)
    

})



}
}

