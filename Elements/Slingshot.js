class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.01,
            length : 100
        };
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    attach(body){
        this.Slingshot.bodyA = body
    }

    fly(){
        this.Slingshot.bodyA = null;
    }

    display(){
        if(this.Slingshot.bodyA){
            var bodyApos = this.Slingshot.bodyA.position;
            var bodyBpos = this.Slingshot.bodyB.position;
             
            push();
            strokeWeight(3);
            line(bodyApos.x, bodyApos.y, bodyBpos.x, bodyBpos.y);
            pop();
        }
    }
}