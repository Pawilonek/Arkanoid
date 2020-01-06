import { Sprite } from './sprite.js';
import { Ball } from './elements/ball.js';
import { Borders } from './borders.js';
import { Paddle } from './elements/paddle.js';
import { Mouse } from './controls/mouse.js';

window.onload = async function () {
    var canvas = document.getElementById('game');
    if (!canvas.getContext) {
        console.error('Canvas unsupported');

        return;
    }

    // Make canvas to fill whole page
    // canvas.width = document.body.clientWidth;
    // canvas.height = document.body.clientHeight;
    var ctx = canvas.getContext('2d');

    console.debug('Loading images...');
    var ballImage = new Sprite('/img/ball.png');
    var paddleImage = new Sprite('/img/paddle.png');

    // Wait to load all images
    await Promise.all([
        ballImage.load(),
        paddleImage.load()
    ]).then((a) => {
        console.log(a);
    });

    var mouse = new Mouse(canvas);
    let ball = new Ball(ballImage);
    let paddle = new Paddle(paddleImage, mouse);
    let borders = new Borders(0, 0, canvas.width, canvas.height)

    // todo: change interval to requesting frame
    // window.requestAnimationFrame(draw);
    setInterval(() => {
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        ball.checkColisions(borders);
        ball.loop();
        ball.draw(ctx);

        paddle.loop();
        paddle.draw(ctx);

    }, 1000 / 30)
};