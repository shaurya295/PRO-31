class Border {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }

            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height

            this.body = Bodies.rectangle(x, y, width, height, options);
            World.add(world, this.body);

    }
    display() {
        push();
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}