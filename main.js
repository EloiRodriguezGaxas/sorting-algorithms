var tmp = [];
var _arr_length = 100;

function startSorting() {
    var speed = document.getElementById("speedRange").value * 5;
    //var sorted = [...tmp];

    /* var steps = bubbleSort(sorted);
    console.log(sorted);

    steps.forEach((element, index) => {
        if(element.swap)
            swap(element.first, element.second, tmp);
        printArray([...tmp], _arr_length, (index + 1) * speed, element.first, element.second);
    });

    printArray([...tmp], _arr_length, steps.length * speed, -99, -99); */

    sorted = quickSort(tmp);
    console.log(sorted);
    
}



function sliderSpeedChange() {
    var speed = document.getElementById("speedRange").value;
    speed = (speed * 5) / 1000;
    document.getElementById("speed-txt").innerHTML = speed;
}

function sliderLengthChange() {
    _arr_length = document.getElementById("lengthRange").value;
    document.getElementById("length-txt").innerHTML = _arr_length;
}

function randomArrayGenerator(printOut) {
    tmp = [];
    for (let i = 0; i < _arr_length; i++) {
        tmp.push(Math.floor(Math.random() * 100));
    }
    if (printOut) printArray([...tmp], _arr_length, 0, -99, -99);
    return tmp;
}

function printArray(arr, numBars, time, pos1, pos2) {
    setTimeout(() => {
        // Get canvas context
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        var w = c.width / numBars;

        // Clean canvas
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();

        // Print bars
        for (let i = 0; i < arr.length; i++) {
            var h = 3.5 * arr[i];
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 1;
            ctx.strokeRect(i * w, 350 - h, w - 1, h);

            if (pos1 == i || pos2 == i)
                ctx.fillStyle = "#7aeb96";
            else
                ctx.fillStyle = "#abc7b2";

            ctx.fillRect(i * w, 350 - h, w - 1, h);

        }

    }, time);
}