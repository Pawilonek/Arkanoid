"use strict";

export class Board {
    ball;
    paddle;

    borders = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }

    constructor(borders, ball, paddle) {
        this.borders = borders;
        this.ball = ball;
        this.paddle = paddle;
    }


    colisionsBorder() {
        let ballPosition = this.ball.getPosition();

        if (ballPosition.x + ballPosition.radius >= this.borders.width) {
            this.ball.bounceRight();
        }

        if (ballPosition.x - ballPosition.radius <= this.borders.x) {
            this.ball.bounceLeft();
        }

        if (ballPosition.y - ballPosition.radius <= this.borders.y) {
            this.ball.bounceTop();
        }

        if (ballPosition.y + ballPosition.radius >= this.borders.height) {
            this.ball.bounceBootm();
        }
    }

    collisionsPaddle() {
        let paddlePosition = this.paddle.getPosition();
        let ballPosition = this.ball.getPosition();

        // todo: There is possibility that ball will stuck on paddle
        // When player quickly move paddle on the ball from side

        if (
            ballPosition.x + ballPosition.radius >= paddlePosition.x &&
            ballPosition.x + ballPosition.radius <= paddlePosition.x + paddlePosition.width &&
            ballPosition.y + ballPosition.radius >= paddlePosition.y &&
            ballPosition.y + ballPosition.radius <= paddlePosition.y + paddlePosition.height
        ) {
            this.ball.bounceBootm();
        }
    }

    loop() {

        this.colisionsBorder();
        this.collisionsPaddle();

        this.ball.loop();

        this.paddle.loop();
    }

    draw(ctx) {

        this.ball.draw(ctx);
        this.paddle.draw(ctx);
    }
}
