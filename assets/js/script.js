var burger = document.getElementById("custom-nav");
var display = 0;

function hideShow() {
    if (display == 1) {
        burger.style.display = "block";
        display = 0;
    } else {
        burger.style.display = "none";
        display = 1;
    }
}