"use strict";

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let colorIndex = 0;

function changeColor() {
    document.body.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
