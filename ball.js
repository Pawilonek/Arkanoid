export class Ball {
    // Image of the ball
    sprite = null;

    angle = 135;
    speed = 30;

    posX = 250;
    posY = 250;

    constructor(sprite) {
        this.sprite = sprite;
    }

    updatePosition() {
        let direction = parseInt(this.angle / 90);
        let ratio = (this.angle % 90) / 90;
        let speedRatio = this.speed * ratio;

        switch (direction) {
            case 0:
                this.posX += speedRatio;
                this.posY -= this.speed - speedRatio;
                break;
            case 1:
                this.posX += this.speed - speedRatio;
                this.posY += speedRatio;
                break;
            case 2:
                this.posX -= speedRatio;
                this.posY += this.speed - speedRatio;
                break;
            case 3:
                this.posX -= this.speed - speedRatio;
                this.posY -= speedRatio;
                break;
            default:
                console.warn(`Invalid direction angle: ${this.angle}`)
        }
    }

    checkColisions(object) {
        if (this.posX >= object.width) {
            // Bounce on right side
            this.angle = 360 - this.angle;

            return true;
        }

        if (this.posX <= object.posX) {
            // Bounce on left side
            this.angle = 360 - this.angle;
            
            return true
        }

        if (this.posY >= object.height) {
            // Onunce on bvottom
            if (this.angle <= 180) {
                this.angle = 180 - this.angle;
            } else {
                this.angle = 360 - (this.angle - 180);
            }

            return true
        }

        if (this.posY <= object.posX) {
            // Onunce on top
            if (this.angle <= 90) {
                this.angle = 180 - this.angle;
            } else {
                this.angle = 180 + 360 - this.angle;
            }

            return true
        }

        return false;
    }

    loop() {
        this.updatePosition();



    }

    draw(ctx) {
        this.sprite.draw(ctx, this.posX, this.posY);
    }
}
