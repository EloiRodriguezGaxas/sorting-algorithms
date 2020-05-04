
function __quickSort(unsorted) {
    _quicksort(unsorted, 0, unsorted.length - 1);
    console.log(sortedArray);
}

function _quicksort(unsorted, low, high) {
    if (low < high) {
        const partitionIdx = partition(unsorted, low, high);
        _quicksort(unsorted, low, partitionIdx - 1);
        _quicksort(unsorted, partitionIdx, high);
    }
    //return unsorted;
}

function partition(unsorted, low, high) {
    var pivot = unsorted[high];
    var i = low;
    for (let j = low; j < high - 1; j++) {
        if (unsorted[j] >= pivot) {
            swap(i, j, unsorted);
            i++;
        }
    }

    swap(i + 1, high, unsorted);

    return i;

}

function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
  };