"use strict";

export class Sprite {
    imageSrc = null;
    image = null;

    loadPromise = null;

    constructor(src) {
        this.imageSrc = src;
    }

    load() {
        if (this.loadPromise) {
            return this.loadPromise;
        }

        this.loadPromise = new Promise((resolve, reject) => {
            this.image = new Image();

            this.image.onload = () => {
                console.debug(`Loaded image: ${this.image.src}`)

                resolve(this);
            };

            this.image.onerror = (err) => {
                console.error(`Cannot load image: ${this.image.src}`);

                reject(err);
            };

            this.image.src = this.imageSrc;
        });

        return this.loadPromise;
    }

    draw(ctx, x, y) {
        ctx.drawImage(this.image, x, y);
    }

    getSize() {
        return {
            width: this.image.width,
            height: this.image.height
        }
    }
}
