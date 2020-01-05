export class Paddle {
    // Image of the paddle
    sprite = null;
    // Mouse information
    mouse = null;

    posX = 0;
    posY = 750;
    width = 0;
    height = 0;

    constructor(sprite, mouse) {
        this.sprite = sprite;
        this.mouse = mouse;

        let sizes = this.sprite.getSize();
        this.width = sizes.width;
        this.height = sizes.height;
    }

    updatePosition() {
        // Put paddle in the middle of the mouse
        let mouseX = this.mouse.getPosition().x
        this.posX = mouseX - this.width / 2;
    }

    loop() {
        this.updatePosition();

    }

    draw(ctx) {
        this.sprite.draw(ctx, this.posX, this.posY);
    }
}
