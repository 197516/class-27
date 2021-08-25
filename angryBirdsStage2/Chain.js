class Chain  {
constructor(bodyA,bodyB){
var options= {
    //the two bodies
bodyA : bodyA,
bodyB : bodyB,
//stiffness between them
stiffness : 0.04,
length : 15

}
this.chain = Constraint.create(options)
World.add(world,this.chain)

}

display(){
var pointA = this.chain.bodyA.position
var pointB = this.chain.bodyB.position
//it is for that we can see the chain
strokeWeight(3)
//the connectivity between
line (pointA.x,pointA.y,pointB.x,pointB.y)
}
}