class Hexagon{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 20, {
            isStatic : false,
            restitution : 1
        })
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        fill('#fed049')
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 40)
        pop();
    }
}