export class Ball {
    // Image of the ball
    sprite = null;

    speedX = 10;
    speedY = 20;

    posX = 1;
    posY = 1;

    constructor(sprite) {
        this.sprite = sprite;
    }

    loop() {
        if (this.posX + this.speedX >= 600) {
            this.speedX *= -1;
        }
        if (this.posX + this.speedX <= 0) {
            this.speedX *= -1;
        }

        this.posX += this.speedX;

        if (this.posY + this.speedY >= 800) {
            this.speedY *= -1;
        }
        if (this.posY + this.speedY <= 0) {
            this.speedY *= -1;
        }

        this.posY += this.speedY;
    }

    draw(ctx) {
        this.sprite.draw(ctx, this.posX, this.posY);
    }
}
