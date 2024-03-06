var burger = document.getElementById("custom-nav");
var display = 0;

function hideShow() {
    if (display == 1) {
        burger.style.right = 0;
        display = 0;
    } else {
        burger.style.right = '-300px';
        display = 1;
    }
}