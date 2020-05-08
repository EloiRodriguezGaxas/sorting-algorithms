Array.prototype.swap = function (i, j) {
    let tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
}

Array.prototype.move = function (from, to) {

    let tmp = this[from];

    if (from < to) {
        for (let i = from; i < to; i++) {
            this[i] = this[i + 1];
        }
        this[to] = tmp;
    } else {
        for (let i = from; i > to; i--) {
            this[i] = this[i - 1];
        }
        this[to] = tmp;
    }

}