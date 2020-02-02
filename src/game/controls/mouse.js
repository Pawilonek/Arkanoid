"use strict";

export class Mouse {
    // Canvas position on screen
    canvasX = 0;
    canvasY = 0;
    // Ratios between client size and canvas size
    // It may be different aster applaying CSS styles
    widthRatio = 1;
    clientHeight = 1;
    // Current mouse position
    posX = 0;
    posY = 0;

    constructor(canvas) {
        // Load information about canvas position on site
        let rect = canvas.getBoundingClientRect();
        this.canvasX = rect.left;
        this.canvasY = rect.top;

        // Count ratios
        this.widthRatio = canvas.clientWidth / canvas.width;
        this.heightRatio = canvas.clientHeight / canvas.height;

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
        this.posX = (evt.clientX - this.canvasX) / this.widthRatio;
        this.posY = (evt.clientY - this.canvasY) / this.heightRatio;
    }

    getPosition() {
        return {
            x: this.posX,
            y: this.posY
        };
    }
}
