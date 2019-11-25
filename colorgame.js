let colors = generateColors(6);
let colorSquares = document.querySelectorAll(".color-square");
let askedColor = document.querySelector(".asked-color");
let headerBackground = document.querySelector("header");
let gameStatus = document.querySelector(".status");
let freshGameButton = document.querySelector(".freshgame");
let easyButton = document.querySelector(".easy");
let hardButton = document.querySelector(".hard");
let pickedColor = pickColor();
let containerDiv = document.querySelector(".container");
askedColor.innerHTML = pickedColor;
gameStatus.innerHTML = "";
hardButton.classList.add("selected");


easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    containerDiv.innerHTML = "<div class='color-square'></div><div class='color-square'></div><div class='color-square'></div>";
    colorSquares = document.querySelectorAll(".color-square");
    colors = generateColors(3);
    pickedColor = pickColor();
    iterables();
    askedColor.innerHTML = pickedColor;
    headerBackground.style.backgroundColor = "steelblue";
    freshGameButton.innerHTML = "NEW GAME";
    fresh(3);
})

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    containerDiv.innerHTML = "<div class='color-square'></div><div class='color-square'></div><div class='color-square'></div><div class='color-square'></div><div class='color-square'></div><div class='color-square'></div>";
    colorSquares = document.querySelectorAll(".color-square");
    colors = generateColors(6);
    pickedColor = pickColor();
    iterables();
    askedColor.innerHTML = pickedColor;
    headerBackground.style.backgroundColor = "steelblue";
    freshGameButton.innerHTML = "NEW GAME";
    fresh(6);
})

function iterables() {
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
                freshGameButton.innerHTML = "PLAY AGAIN!"
            }      
        })
    } 
}

iterables();

function rightColor(color) {
    for (let i = 0; i < colors.length; i++) {
        colorSquares[i].style.backgroundColor = color;
    }
}

function generateColors(num){
    let arr = [];
    for (i=0; i<num; i++){
        arr.push(getRandomColors());
    }
    return arr;
}

function getRandomColors(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
    let random = colors[Math.floor(Math.random()*colors.length)];
    return random;
}

function fresh(u) {
    freshGameButton.addEventListener("click", function(){
        colors = generateColors(u);
        pickedColor = pickColor();
        askedColor.innerHTML = pickedColor;
        for (let i = 0; i < colorSquares.length; i++){
            colorSquares[i].style.backgroundColor = colors[i];
        }
        headerBackground.style.backgroundColor = "steelblue";
        freshGameButton.innerHTML = "NEW GAME";
    })  
}
fresh(6);
