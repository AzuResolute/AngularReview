export class Point {

    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log(`X: ${this._x}, Y: ${this._y}`);
    }

    getDistance(another: Point) {

    }

    get x() {
        return this._x;
    }

    // set X(value: number) {
        // if (value < 0) {
        //     throw new Error('value cannot be less than 0');
        // }
        // this.x = value;
    // }
}