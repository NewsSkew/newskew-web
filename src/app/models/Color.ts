export class Color {
    red: number;
    green: number;
    blue: number;
    alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    /**
     * Return a CSS RGB of the color
     */
    get rgb(): string {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }
}