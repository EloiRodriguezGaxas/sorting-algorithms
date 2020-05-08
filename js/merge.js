function mergeSort(unsorted, start, end, steps) {
    if (start == undefined || end == undefined) {
        start = 0;
        end = unsorted.length - 1;
        steps = [];
    }
    if (end - start > 1) {
        let middle = Math.floor((start + end) / 2);
        mergeSort(unsorted, start, middle, steps);
        mergeSort(unsorted, middle + 1, end, steps);
        merge(unsorted, middle, start, end, steps)
    } else {
        let middle = Math.floor((start + end) / 2);
        merge(unsorted, middle, start, end, steps);
    }
    return steps;
}

function merge(unsorted, middle, start, end, steps) {
    let i = start
    let j = middle + 1;
    let finish_i = middle;

    while (i <= finish_i && j <= end) {
        if (unsorted[j] < unsorted[i]) {
            steps.push({
                first: j,
                second: i,
                move: true,
                compared: i
            })
            unsorted.move(j, i);
            j++;
            i++;
            finish_i++;
        } else {
            steps.push({
                first: j,
                second: i,
                move: false,
                compared: i
            })
            i++;
        }
    }
}