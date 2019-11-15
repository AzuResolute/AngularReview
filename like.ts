export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected = false){}

    get likesCount () {
        return this._likesCount;
    }

    get isSelected () {
        return this._isSelected;
    }

    onClick () {
        this._likesCount += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    }
}

// class Like {
//     private _numberOfLikes: number;
//     private _selected = false;

//     get howManyLikes () {
//         return this._numberOfLikes;
//     }

//     like () {
//         this._selected ? this._numberOfLikes-- : this._numberOfLikes++;
//         this._selected = !this._selected;
//     }
// }