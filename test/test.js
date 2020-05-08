describe('Test bubble sort', () => {

    // var _arr = []
    // for(let i = 0; i<100; i++) {
    //     _arr.push(Math.floor(Math.random() * 101));
    // }
    // console.log(_arr);
    // console.log(_arr.sort(function(a, b){return a-b}));

    for (let i = 0; i < 10; i++) {
        it('Should sort ' + i, () => {
            let tmp = [...data.sets[i].unordered];
            bubbleSort(tmp);
            expect(tmp).toEqual(data.sets[i].ordered);
        })
    }
})

describe('Test heap sort', () => {

    for (let i = 0; i < 10; i++) {
        it('Should sort ' + i, () => {
            let tmp = [...data.sets[i].unordered];
            heapSort(tmp);
            expect(tmp).toEqual(data.sets[i].ordered);
        })
    }
})

describe('Test merge sort', () => {

    for (let i = 0; i < 10; i++) {
        it('Should sort ' + i, () => {
            let tmp = [...data.sets[i].unordered];
            mergeSort(tmp);
            expect(tmp).toEqual(data.sets[i].ordered);
        })
    }
})

describe('Test quick sort', () => {

    for (let i = 0; i < 10; i++) {
        it('Should sort ' + i, () => {
            let tmp = [...data.sets[i].unordered];
            quickSort(tmp);
            expect(tmp).toEqual(data.sets[i].ordered);
        })
    }
})