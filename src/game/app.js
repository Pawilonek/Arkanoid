"use strict";

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
    let images = {
        ball: new Sprite('/img/ball.png'),
        paddle: new Sprite('/img/paddle.png'),
        // Tails
        tailBlue: new Sprite('/img/tail-blue.png'),
        tailGreen: new Sprite('/img/tail-green.png'),
        tailGrey: new Sprite('/img/tail-grey.png'),
        tailPurple: new Sprite('/img/tail-purple.png'),
        tailRed: new Sprite('/img/tail-red.png'),
        tailYellow: new Sprite('/img/tail-yellow.png')
    };

    let imagesLoading = [];
    for (let key in images) {
        imagesLoading.push(images[key].load());
    }

    // Wait to load all images
    await Promise.all(imagesLoading);

    let boardBorders = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };

    let mouse = new Mouse(canvas);
    let paddle = new Paddle(images.paddle, mouse, boardBorders);
    let ball = new Ball(images.ball);
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