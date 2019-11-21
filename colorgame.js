let colors = [
    "rgb(255, 122, 100)",
    "rgb(95, 100, 80)",
    "rgb(30, 100, 100)",
    "rgb(80, 255, 150)",
    "rgb(155, 115, 50)",
    "rgb(55, 102, 200)"
]

let colorSquares = document.querySelectorAll(".color-square");
let askedColor = document.querySelector(".asked-color");
let headerBackground = document.querySelector("header");
let gameStatus = document.querySelector(".status");
let pickedColor = colors[Math.floor(Math.random()*colors.length)];
askedColor.innerHTML = pickedColor;
gameStatus.innerHTML = "";

for (let i = 0; i < colorSquares.length; i++){
    colorSquares[i].style.backgroundColor = colors[i];
    colorSquares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor !== pickedColor) {
            gameStatus.innerHTML = "Try again!"
            this.style.backgroundColor = "black";
        } else {
            gameStatus.innerHTML = "Correct!";
            rightColor(pickedColor);
            headerBackground.style.backgroundColor = pickedColor;
        }      
    })
}

function rightColor(color) {
    for (let i = 0; i < colors.length; i++) {
        colorSquares[i].style.backgroundColor = color;
    }
}

    



