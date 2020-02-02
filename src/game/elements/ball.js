"use strict";

export class Ball {
    // Image of the ball
    sprite = null;

    angle = 225;
    speed = 10;

    posX = 310;
    posY = 490;
    radius = 11;

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

    loop() {
        this.updatePosition();
    }

    bounceRight() {
        this.angle = 360 - this.angle;
    }

    bounceLeft() {
        this.angle = 360 - this.angle;
    }

    bounceBootm() {
        if (this.angle <= 180) {
            this.angle = 180 - this.angle;

            return;
        }

        this.angle = 180 + 360 - this.angle;
    }

    bounceTop() {
        if (this.angle <= 90) {
            this.angle = 180 - this.angle;

            return;
        }

        this.angle = 180 + 360 - this.angle;
    }

    getPosition() {
        return {
            x: this.posX,
            y: this.posY,
            radius: this.radius
        };
    }

    draw(ctx) {
        this.sprite.draw(
            ctx,
            this.posX - this.radius,
            this.posY - this.radius
        );
    }
}
