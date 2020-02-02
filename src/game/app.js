"use strict";

import { Sprite } from './sprite.js';
import { Tail } from './elements/tail.js';
import { Ball } from './elements/ball.js';
import { Paddle } from './elements/paddle.js';
import { Mouse } from './controls/mouse.js';
import { Board } from './board.js';

window.onresize = function () {
    // Trmporary fix to update all calculations after window resize
    location.reload();
};

window.onload = async function () {
    var canvas = document.getElementById('game');
    if (!canvas.getContext) {
        console.error('Canvas unsupported');

        return;
    }

    // Make canvas to fill whole page
    // todo: tmeporary spolution, Make it a little more clean
    // And check if should fill based on width or height
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;

    let ratioW = clientWidth / canvas.width;
    let ratioH = clientHeight / canvas.height;

    console.log(ratioW, ratioH);

    canvas.style.height = String(clientHeight) + 'px';
    canvas.style.width = String(canvas.width * ratioH) + 'px';


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
        tailYellow: new Sprite('/img/tail-yellow.png'),
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

    // tail size: 64x32
    let tails = [
        new Tail(images.tailBlue, 24, 64),
        new Tail(images.tailGreen, 88, 64),
        new Tail(images.tailGrey, 152, 64),
        new Tail(images.tailPurple, 216, 64),
        new Tail(images.tailRed, 280, 64),
        new Tail(images.tailYellow, 344, 64),

        new Tail(images.tailBlue, 24, 96),
        new Tail(images.tailGreen, 88, 96),
        new Tail(images.tailGrey, 152, 96),
        new Tail(images.tailPurple, 216, 96),
        new Tail(images.tailRed, 280, 96),
        new Tail(images.tailYellow, 344, 96),

        new Tail(images.tailBlue, 24, 128),
        new Tail(images.tailGreen, 88, 128),
        new Tail(images.tailGrey, 152, 128),
        new Tail(images.tailPurple, 216, 128),
        new Tail(images.tailRed, 280, 128),
        new Tail(images.tailYellow, 344, 128),

        new Tail(images.tailBlue, 24, 160),
        new Tail(images.tailGreen, 88, 160),
        new Tail(images.tailGrey, 152, 160),
        new Tail(images.tailPurple, 216, 160),
        new Tail(images.tailRed, 280, 160),
        new Tail(images.tailYellow, 344, 160),

        new Tail(images.tailBlue, 24, 192),
        new Tail(images.tailGreen, 88, 192),
        new Tail(images.tailGrey, 152, 192),
        new Tail(images.tailPurple, 216, 192),
        new Tail(images.tailRed, 280, 192),
        new Tail(images.tailYellow, 344, 192),
    ];

    let mouse = new Mouse(canvas);
    let paddle = new Paddle(images.paddle, mouse, boardBorders);
    let ball = new Ball(images.ball);
    let board = new Board(boardBorders, ball, paddle, tails);

    // todo: change interval to requesting frame
    // window.requestAnimationFrame(draw);
    setInterval(() => {
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        board.loop();
        board.draw(ctx);

    }, 1000 / 30)
};
