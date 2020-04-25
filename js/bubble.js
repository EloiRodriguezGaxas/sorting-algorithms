class Bubble {
    constructor(unsorted, speed) {
        // //this.printArray(this.unsorted.slice(0), this.unsorted.slice(0), 0);
        // this.printArray(this.unsorted.slice(0), 0);
        // var initial = this.unsorted.slice(0);
        // this.sort((time) => {
        //     //this.printArray(this.unsorted, initial, time); 
        //     this.printArray(this.unsorted.slice(0), time);
        // });

        this.speed = speed;
        this.unsorted = unsorted;

        this.i = 0;
        this.j = 0;
        this.swapped = false;

    }

    randomArrayGenerator(arr_length) {
        var tmp = [];
        for (let i = 0; i < arr_length; i++) {
            tmp.push(Math.floor(Math.random() * 100));
        }
        return tmp;
    }

    printArray(arr, time, pos) {
        setTimeout(() => {
            // Get canvas context
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");

            // Clean canvas
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.beginPath();

            // Print bars
            for (let i = 0; i < arr.length; i++) {
                var h = 3.5 * arr[i];
                ctx.strokeStyle = "blue";
                ctx.lineWidth = 1;
                ctx.strokeRect(i * 13, 350 - h, 13, h);

                if (pos == i || pos + 1 == i)
                    ctx.fillStyle = "#7aeb96";
                else
                    ctx.fillStyle = "#abc7b2";

                ctx.fillRect(i * 13, 350 - h, 12, h);

            }
            ctx.stroke();

        }, this.speed * time);
    }

    // printArray(arr, old, time, pos, changed) {
    //     setTimeout(function () {
    //         var parent = document.getElementById("results");
    //         var elements = '<div class="array-div">';
    //         var old_elements = '<div class="array-div">';
    //         var old_element, element;
    //         var class_type = changed ? "box-active-green" : "box-active-red";
    //         for (let i = 0; i < arr.length; i++) {
    //             let css_class = (i == pos || i == pos + 1) ? class_type : "";
    //             old_element =
    //                 `
    //              <div class="box">
    //                  <div class="box-text">
    //                  ` + old[i] + `
    //                  </div>
    //              </div>
    //              `;
    //             old_elements += old_element;

    //             element =
    //                 `
    //                 <div class="box">
    //                     <div class="box-text ` + css_class + `">
    //                     ` + arr[i] + `
    //                     </div>
    //                 </div>
    //                 `;
    //             elements += element;
    //         }
    //         elements += "</div>";
    //         old_elements += "</div>";
    //         parent.innerHTML = old_elements + elements;
    //     }, this.speed * time);

    // }

    sort(callback) {
        var swap;
        var count = 1;
        var old = this.unsorted.slice(0);
        for (let i = 0; i < this.unsorted.length; i++) {
            swap = false;
            for (let j = 0; j < this.unsorted.length - i - 1; j++) {
                if (this.unsorted[j] > this.unsorted[j + 1]) {
                    this.swap(j);
                    swap = true;
                }
                //this.printArray(this.unsorted.slice(0), old, count, j, swap);
                this.printArray(this.unsorted.slice(0), count, j);
                old = this.unsorted.slice(0);
                count++;
            }
            if (!swap) {
                //this.printArray(this.unsorted.slice(0), this.unsorted.slice(0), count, null, false);
                callback(count);
                return;
            };
        }
    }

    sortStep() {
        if (this.i < this.unsorted.length) {
            if (this.j >= this.unsorted.length - this.i - 1) {
                this.j = 0;
                this.i++;
                if (!this.swapped) {
                    return {
                        "finished": true,
                        "arr": this.unsorted.slice(0)
                    }
                }
                this.swapped = false;
            }

            if (this.unsorted[this.j] > this.unsorted[this.j + 1]) {
                this.swap(this.j);
                this.swapped = true;
            }
            
            this.j++;
            return {
                "finished": false,
                "pos1": this.j - 1,
                "pos2": this.j,
                "arr": this.unsorted.slice(0)
            }
        } else {
            return {
                "finished": true,
                "arr": this.unsorted.slice(0)
            }
        }
    }

    swap(pos) {
        let tmp = this.unsorted[pos];
        this.unsorted[pos] = this.unsorted[pos + 1];
        this.unsorted[pos + 1] = tmp;
    }

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}