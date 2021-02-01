class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }

            this.body = Bodies.rectangle(x, y, width, height);
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            World.add(world, this.body);
    }       
    display() {
        push();
        rectMode(CENTER);
        fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}