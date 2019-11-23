let colors = generateColors(6);
let colorSquares = document.querySelectorAll(".color-square");
let askedColor = document.querySelector(".asked-color");
let headerBackground = document.querySelector("header");
let gameStatus = document.querySelector(".status");
let freshGameButton = document.querySelector(".freshgame");
let pickedColor = pickColor();
askedColor.innerHTML = pickedColor;
gameStatus.innerHTML = "";

function pickColor(){
    let random = colors[Math.floor(Math.random()*colors.length)];
    return random;
}

freshGameButton.addEventListener("click", function(){
    //gemnerate random colors
    colors = generateColors(6);
    //pick one random colors
    pickedColor = pickColor();
    //reflect the pickedColor in the question area
    askedColor.innerHTML = pickedColor;
    //change color of squares
    for (let i = 0; i < colorSquares.length; i++){
        colorSquares[i].style.backgroundColor = colors[i];
    }
    headerBackground.style.backgroundColor = "steelblue"
})

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

function generateColors(num){
    let arr = [];
    for (i=0; i<num; i++){
        arr.push(getRandomColors())
    }
    return arr;
}

function getRandomColors(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


