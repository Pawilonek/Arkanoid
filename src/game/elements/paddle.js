export class Paddle {
    // Image of the paddle
    sprite = null;
    // Mouse information
    mouse = null;
    // Size of the board
    board = {};

    posX = 0;
    posY = 750;
    width = 0;
    height = 0;

    constructor(sprite, mouse, board) {
        this.sprite = sprite;
        this.mouse = mouse;
        this.board = board;

        let sizes = this.sprite.getSize();
        this.width = sizes.width;
        this.height = sizes.height;
    }

    updatePosition() {
        // Put paddle in the middle of the mouse
        let mouseX = this.mouse.getPosition().x
        let newPosition = mouseX - this.width / 2;

        // Do not move paddle outside the board

        // Left side
        if (newPosition <= this.board.x) {
            this.posX = this.board.x;

            return;
        }

        // Right side
        if (newPosition + this.width >= this.board.width) {
            this.posX = this.board.width - this.width;

            return;
        }

        this.posX = mouseX - this.width / 2;
    }

    loop() {
        this.updatePosition();
    }

    draw(ctx) {
        this.sprite.draw(ctx, this.posX, this.posY);
    }
}
