
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

// class Bubble {
//     constructor(unsorted, speed) {

//         this.speed = speed;
//         this.unsorted = unsorted;

//         this.i = 0;
//         this.j = 0;
//         this.swapped = false;

//     }

//     sort(unsorted) {
//         var steps = [];
//         var swap;
//         for (let i = 0; i < this.unsorted.length; i++) {
//             swap = false;
//             for (let j = 0; j < this.unsorted.length - i - 1; j++) {
//                 if (this.unsorted[j] > this.unsorted[j + 1]) {
//                     steps.push({
//                         first: j,
//                         second: j + 1,
//                         swap: true
//                     });
//                     this.swap(j);
//                     swap = true;
//                 } else {
//                     steps.push({
//                         first: j,
//                         second: j + 1,
//                         swap: false
//                     });
//                 }
//             }
//             if (!swap) {
//                 return steps;
//             };
//         }
//     }

//     sortStep() {
//         if (this.i < this.unsorted.length) {
//             if (this.j >= this.unsorted.length - this.i - 1) {
//                 this.j = 0;
//                 this.i++;
//                 if (!this.swapped) {
//                     return {
//                         "finished": true,
//                         "arr": [...this.unsorted]
//                     }
//                 }
//                 this.swapped = false;
//             }

//             if (this.unsorted[this.j] > this.unsorted[this.j + 1]) {
//                 this.swap(this.j);
//                 this.swapped = true;
//             }

//             this.j++;
//             return {
//                 "finished": false,
//                 "pos1": this.j - 1,
//                 "pos2": this.j,
//                 "arr": [...this.unsorted]
//             }
//         } else {
//             return {
//                 "finished": true,
//                 "arr": [...this.unsorted]
//             }
//         }
//     }

//     swap(pos) {
//         let tmp = this.unsorted[pos];
//         this.unsorted[pos] = this.unsorted[pos + 1];
//         this.unsorted[pos + 1] = tmp;
//     }

// }