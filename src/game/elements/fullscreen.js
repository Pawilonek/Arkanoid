"use strict";

export class Fullscreen {
    canvas = null;
    mouse = null;
    sprite = null;

    pos = {
        x: 0,
        y: 0,
    };

    constructor(canvas, mouse, sprite, posX, posY) {
        this.canvas = canvas;
        this.mouse = mouse;

        this.sprite = sprite;
        this.pos.x = posX;
        this.pos.y = posY;

        let sizes = this.sprite.getSize();
        this.width = sizes.width;
        this.height = sizes.height;

        this.mouse.onClick(() => {
            this.onClick();
        });
    }

    onClick() {
        if (!this.isHover()) {
            // Clieckd somewhere outside
            return;
        }

        if (this.canvas.webkitRequestFullScreen) {
            this.canvas.webkitRequestFullScreen();
    
            return;
        }
    
        this.canvas.mozRequestFullScreen();

        console.log('FULLL SCREEN');
    }

    isHover() {
        let mousePosition = this.mouse.getPosition();

        return mousePosition.x >= this.pos.x
            && mousePosition.x <= this.pos.x + this.width
            && mousePosition.y >= this.pos.y
            && mousePosition.y <= this.pos.y + this.width;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.isHover() ? 0.6 : 0.2;
        this.sprite.draw(ctx, this.pos.x, this.pos.y);
        ctx.restore();
    }
}
