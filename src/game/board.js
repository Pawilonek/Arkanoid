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

    loop() {
        

        this.ball.checkColisions(this.borders);
        this.ball.loop();

        this.paddle.loop();
    }

    draw(ctx) {

        this.ball.draw(ctx);
        this.paddle.draw(ctx);
    }
}
