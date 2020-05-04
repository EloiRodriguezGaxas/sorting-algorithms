[2,5,1,0]
function quickSort(unsorted) {
    sortedArray = _quicksort([...unsorted], 0, unsorted.length - 1);
    console.log(sortedArray);
}

function _quicksort(unsorted, low, high) {
    if (low < high) {
        const partitionIdx = partition(unsorted, low, high);
        _quicksort(unsorted, low, partitionIdx - 1);
        _quicksort(unsorted, partitionIdx, high);
    }
    return unsorted;
}

function partition(unsorted, low, high) {
    var pivot = unsorted[high];
    var i = low;
    for (let j = low; j < high - 1; j++) {
        if (unsorted[j] >= pivot) {
            swap(unsorted, i, j);
            i++;
        }
    }

    swap(unsorted, i + 1, high);

    return i;

}