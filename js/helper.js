function swap(i, j, _arr) {
    let tmp = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = tmp;
}

function move(i, j, _arr) {

    if (i < 0 || i > _arr.length || j < 0 || j > _arr.length) {
        console.log("Indices i (", i, ") and j (", j, ") must be within the limits of the array length (0, ", _arr.length, ")");
        return _arr;
    }

    _arr.splice(j, 0, _arr.splice(i, 1)[0]);

    return _arr;

}

Array.prototype.swap = function (i, j) {
    let tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
}

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
}