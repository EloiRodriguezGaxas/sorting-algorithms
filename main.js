var opts = {
    BUBBLE: 1,
    HEAP: 2
}

var tmp = [];
var _arr_length = 100;

function changeButtonsState() {
    let btn = document.getElementById("btn-generator");
    btn.disabled = !btn.disabled;

    btn = document.getElementById("btn-start");
    btn.disabled = !btn.disabled;
}

function startSorting() {
    changeButtonsState();
    var speed = document.getElementById("speedRange").value * 5;

    var e = document.getElementById("algorithms");
    var algorithm = e.options[e.selectedIndex].value;

    var sorted = [...tmp];

    switch (algorithm) {
        case "bubble":
            var t0 = performance.now()
            var steps = bubbleSort(sorted);
            var t1 = performance.now()
            break;
        case "heap":
            var t0 = performance.now()
            var steps = heapSort(sorted);
            var t1 = performance.now()
            break;
        case "merge":
            var t0 = performance.now()
            var steps = mergeSort(sorted);
            var t1 = performance.now()
            break;
        case "quick":
            var t0 = performance.now()
            var steps = quickSort(sorted);
            var t1 = performance.now()
            break;
        default:
            alert("You need to select an algorithm!");
            return;
    }
    
    console.log(sorted);
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

    steps.forEach((element, index) => {
        if (element.swap){
            tmp.swap(element.first, element.second);
            printArray([...tmp], _arr_length, (index + 1) * speed, element.first, element.second);
        } else if (element.move){
            tmp.move(element.first, element.second);
            printArray([...tmp], _arr_length, (index + 1) * speed, element.first, element.compared);
        }
    });

    printArray([...tmp], _arr_length, steps.length * speed, -99, -99);

    setTimeout(() => {
        changeButtonsState();
    }, steps.length * speed)

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