export class Mouse {
    // Canvas position on screen
    canvasX;
    canvasY;

    // Current mouse position
    posX = 0;
    posY = 0;

    constructor(canvas) {
        // Load information about canvas position
        let rect = canvas.getBoundingClientRect();

        // todo: It will be nice to update this on responsive design
        this.canvasX = rect.left;
        this.canvasY = rect.top;

        canvas.addEventListener('mousemove', (evt) => {
            this.posX = evt.clientX - this.canvasX;
            this.posY = evt.clientY - this.canvasY;
        }, false);

        // todo: may be usefull too: touchstart
        canvas.addEventListener("touchmove", (evt) => {
            let touch = evt.touches[0];

            this.posX = touch.clientX - this.canvasX;
            this.posY = touch.clientY - this.canvasY;
        }, false);
    }

    getPosition() {
        return {
            x: this.posX,
            y: this.posY
        };
    }
}
