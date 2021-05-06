class obs{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height, {
            isStatic : false,
            restitution : 0.8,
        });
        World.add(world, this.body);
        this.width = width;
        this.height = height
        this.visibility = 255
    }

    display(){

        var pos = this.body.position

        if(this.body.speed < 3){
            push();
            fill('#f5c0c0');
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }else{
            score = score + 1;
            World.remove(world, this.body);
        }
    }
}