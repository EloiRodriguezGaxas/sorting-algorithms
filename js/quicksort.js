function quickSort(unsorted, low, high, steps) {
    if (low == undefined || high == undefined) {
        low = 0;
        high = unsorted.length - 1;
        steps = [];
    }
    if (unsorted.length > 1) {

        const partitionIdx = partition(unsorted, low, high, steps);

        if (low < partitionIdx - 1)
            quickSort(unsorted, low, partitionIdx - 1, steps);

        if (high > partitionIdx)
            quickSort(unsorted, partitionIdx + 1, high, steps);

    }

    return steps;
}



function partition(unsorted, low, high, steps) {
    var pivot = unsorted[high];
    var i = 0;
    var j = 0;
    var positions = [];
    for (let k = low; k < high; k++) {
        if (unsorted[k] < pivot) {
            if (k != i + low) {
                positions.push({
                    old: k,
                    new: i + low
                });
                steps.push({
                    first: k,
                    second: i + low,
                    move: true,
                    compared: high
                });
            }
            i++;
        } else {
            if (k != j + i + low) {
                positions.push({
                    old: k,
                    new: j + i + low
                });
                steps.push({
                    first: k,
                    second: j + i + low,
                    move: true,
                    compared: high
                });
            }
            j++;
        }
    }
    if (high != i + low) {
        positions.push({
            old: high,
            new: i + low
        });
        steps.push({
            first: high,
            second: i + low,
            move: true,
            compared: high
        });
    }
    updatePositions(unsorted, positions);

    return i + low;

}

function updatePositions(unsorted, positions) {
    for (let i = 0; i < positions.length; i++) {
        const element = positions[i];
        unsorted.move(element.old, element.new);
    }
}