"use strict";

export class Mouse {
    // Canvas position on screen
    canvasX = 0;
    canvasY = 0;

    // Current mouse position
    posX = 0;
    posY = 0;

    constructor(canvas) {
        // Load information about canvas position
        let rect = canvas.getBoundingClientRect();

        // todo: It will be nice to update this on responsive design
        this.canvasX = rect.left;
        this.canvasY = rect.top;

        // Track mouse movement
        canvas.addEventListener('mousemove', (evt) => {
            this.updatePosition(evt);
        });

        // Track touch for mobile devices
        canvas.addEventListener("touchmove", (evt) => {
            this.updatePosition(evt.touches[0]);
        }, { passive: true });
        // And track just single taps
        canvas.addEventListener("touchstart", (evt) => {
            this.updatePosition(evt.touches[0]);
        }, { passive: true });
    }

    updatePosition(evt) {
        this.posX = evt.clientX - this.canvasX;
        this.posY = evt.clientY - this.canvasY;
    }

    getPosition() {
        return {
            x: this.posX,
            y: this.posY
        };
    }
}
