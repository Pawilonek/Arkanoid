import { Sprite } from './sprite.js';
import { Ball } from './elements/ball.js';
import { Paddle } from './elements/paddle.js';
import { Mouse } from './controls/mouse.js';
import { Board } from './board.js';

window.onresize = function () {
    // Trmporary fix to update all calculations
    location.reload();
};

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

    let boardBorders = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };

    let mouse = new Mouse(canvas);
    let paddle = new Paddle(paddleImage, mouse, boardBorders);
    let ball = new Ball(ballImage);
    let board = new Board(boardBorders, ball, paddle);

    // todo: change interval to requesting frame
    // window.requestAnimationFrame(draw);
    setInterval(() => {
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        board.loop();
        board.draw(ctx);

    }, 1000 / 30)
};