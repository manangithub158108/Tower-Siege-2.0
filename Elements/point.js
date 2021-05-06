class point{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 10, {
            isStatic : true,
        })
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        fill('#1597bb')
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 10)
        pop();
    }
}