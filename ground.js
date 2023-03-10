class Ground{
   constructor(x,y,w,h){
     let Options={
      isStatic: true
     }
     this.body=Bodies.rectangle(x,y,w,h,Options)
     World.add(world,this.body)
     this.w=w
     this.h=h
   }
   display(){
    var pause=this.body.position
    push()
    rectMode(CENTER)
    rect(pause.x,pause.y,this.w,this.h)
    pop()
   }
   }
