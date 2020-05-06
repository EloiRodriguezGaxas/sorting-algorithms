
function bubbleSort(unsorted) {
    var steps = [];
    var swapped;
    for (let i = 0; i < unsorted.length; i++) {
        swapped = false;
        for (let j = 0; j < unsorted.length - i - 1; j++) {
            if (unsorted[j] > unsorted[j + 1]) {
                steps.push({
                    first: j,
                    second: j + 1,
                    swap: true
                });
                swap(j, j + 1, unsorted);
                swapped = true;
            } else {
                steps.push({
                    first: j,
                    second: j + 1,
                    swap: false
                });
            }
        }
        if (!swapped) {
            return steps;
        };
    }
}