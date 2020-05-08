function heapArray(unsorted, n, i, steps) {

    let smallest = i;

    var left = 2 * i + 1;
    var right = 2 * i + 2;

    if (left < n && unsorted[smallest] < unsorted[left]) {
        smallest = left;
    }

    if (right < n && unsorted[smallest] < unsorted[right]) {
        smallest = right;
    }

    if (smallest != i) {
        steps.push({
            first: i,
            second: smallest,
            swap: true
        });
        unsorted.swap(i, smallest);
        heapArray(unsorted, n, smallest, steps);
    } else {
        steps.push({
            first: i,
            second: smallest,
            swap: false
        });
    }
    return unsorted;
}

function heapSort(unsorted) {
    let steps = [];
    let arr_length = unsorted.length;

    for (let i = Math.floor(arr_length / 2 - 1); i >= 0; i--) {
        heapArray(unsorted, arr_length, i, steps);
    }

    for(let i = arr_length - 1; i>= 0; i--) {
        steps.push({
            first: 0,
            second: i,
            swap: true
        });
        unsorted.swap(0, i);
        heapArray(unsorted, i, 0, steps);
    }
    return steps;
}