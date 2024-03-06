var burger = document.getElementById("custom-nav");
var display = 0;

function hideShow() {
    if (display == 1) {
        burger.style.right = 0;
        burger.style.display = "block";
        display = 0;
    } else {
        buger.style.right = -100%;
        burger.style.display = "none";
        display = 1;
    }
}