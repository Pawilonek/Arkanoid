// export default class Img {
export class Img {
    imageSrc = null;
    image = null;

    constructor(src) {
        this.imageSrc = src;
        this.image = new Image();

        return new Promise((resolve, reject) => {
            this.image.addEventListener("load", () => resolve(img));
            this.image.addEventListener("error", err => reject(err));
            this.image.src = src;
        });
    }
}
