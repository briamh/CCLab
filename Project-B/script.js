const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    e.preventDefault;
    button.classList.add("animate");
    setTimeout(() => {
        button.classList.remove("animate");
    }, 600);
});

function redirect() {
    var count = 5;
    setInterval(function () {
        count--;
        if (count == 0) {
            location.href = "display.html";
        }
    }
        , 90);
}

function redirect2() {
    location.href = "about.html"
}