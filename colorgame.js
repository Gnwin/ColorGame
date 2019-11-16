let colors = [
    "rgb(255, 122, 100)",
    "rgb(95, 100, 80)",
    "rgb(30, 100, 100)",
    "rgb(80, 255, 150)",
    "rgb(155, 115, 50)",
    "rgb(55, 102, 200)"
]

let colorsDiv = document.querySelectorAll(".square");
let pickedColor = colors[4];
let colorDisplay = document.querySelector(".color");
let headerBackground = document.querySelector("header")
let message = document.querySelector(".msg");

colorDisplay.innerHTML =  pickedColor;

for (i=0; i<=colorsDiv.length; i++){
    colorsDiv[i].style.backgroundColor = colors[i];
    colorsDiv[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            colorsDiv[i].style.backgroundColor = pickedColor;
            headerBackground.style.backgroundcolor = pickedColor;
        } else {
            colorsDiv[i].style.backgroundColor = "black";
        }      
    })
}


// let pickedColor = colors[Math.floor(Math.random()*(colors.length))];


// for (let i = 0; i < colors.length; i++) {
//     colors[i].addEventListener("click", function() {
//         if (pickedColor == colors[i]) {
//             colorsDiv[i].style.backgroundColor = pickedColor;
//         } else {
//             colorsDiv[i].style.display = "none";
//         }  
//     })
// }


