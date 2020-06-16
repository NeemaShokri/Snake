function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "Yellow"
        
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
        }

        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = {x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width - scale) {
            this.x = 0
        }

        if (this.y > canvas.height - scale) {
            this.y = 0
        }

        if (this.x < 0) {
            this.x = canvas.width - scale
        }

        if (this.y < 0) {
            this.y = canvas.height - scale
        }
    }

    this.changeDirection = function(direction) {
        
        console.log('Direction: ' + direction)

        if (direction == 'Up' || direction == 'w') {
            if (this.ySpeed <= 0) {
                this.xSpeed = 0;
                this.ySpeed = -1 * scale;
            }
        } else if (direction == 'Down' || direction == 's') {
            if (this.ySpeed >= 0) {
                this.xSpeed = 0;
                this.ySpeed = 1 * scale;
            }
        } else if (direction == 'Left' || direction == 'a') {
            if (this.xSpeed <= 0) {
                this.ySpeed = 0;
                this.xSpeed = -1 * scale;
            }
        } else if (direction == 'Right' || direction == 'd') {
            if (this.xSpeed >= 0) {
                this.ySpeed = 0;
                this.xSpeed = 1 * scale;
            }
        }
    }

    this.eat = function(fruit) {
        if (this.x == fruit.x && this.y == fruit.y) {
            this.total ++;
            return true;
        } else {
            return false
        }
    }

    this.lose = function() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
                return true;
            }
        }
        return false;
    }

}