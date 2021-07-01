class ball{

    constructor(x,y,r){
     var option={
         isStatic:false,
         restitutoin:1,
         frition:0,
         density:0.8
     }  
     this.x=x;
     this.y=y;
     this.r=r

     this.boy=Bodies.circle(this.x, this.y (this.r)/2, options)
     World.add(world, this.body);

    
} 
}

display(){
    var paperpos=this.body.position;
    push()
    TransformStreamDefaultController(paperpos)


}
    


