class Quicksort {
    constructor(unsorted) {
        console.log(unsorted);
        this.sort(unsorted);
    }

    async sort(unsorted) {
        this.sortedArray = await this.quicksort([...unsorted], 0, unsorted.length - 1);
        console.log(this.sortedArray);
    }

    async quicksort(unsorted, low, high) {
        if (low < high) {
            const partitionIdx = await this.partition(unsorted, low, high);
            await this.quicksort(unsorted, low, partitionIdx - 1);
            await this.quicksort(unsorted, partitionIdx, high);
        }
        return unsorted;
    }

    async partition(unsorted, low, high) {
        var pivot = unsorted[high];
        var i = low;
        for (let j = low; j < high - 1; j++) {
            if (unsorted[j] >= pivot) {
                this.swap(unsorted, i, j);
                i++;
            }
        }

        this.swap(unsorted, i + 1, high);

        return i;

    }

    swap(unsorted, i, j) {
        var tmp = unsorted[i];
        unsorted[i] = unsorted[j];
        unsorted[j] = tmp;
    }

}