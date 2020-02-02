"use strict";

export class Tail {
    // Image of the tail
    sprite = null;

    pos = {
        x: 0,
        y: 0,
    };

    constructor(sprite, posX, posY) {
        this.sprite = sprite;
        this.pos.x = posX;
        this.pos.y = posY;
    }

    draw(ctx) {
        this.sprite.draw(ctx, this.pos.x, this.pos.y);
    }
}
