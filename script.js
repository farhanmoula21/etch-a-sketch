"use strict";

const gridBox = document.querySelector(".container");
const btn = document.querySelector(".resetButton");
const clrBtn = document.querySelector(".clear");
let square;
let allSquares;
let elBox = [];
let numberOfGrid = 16;



function start(){
    makeSquare(numberOfGrid);
    hovering();
}

// Boxes
function makeSquare(numberOfGrid){
    for(let i=0; i< numberOfGrid*numberOfGrid; i++){
square=document.createElement("div");
square.className="sqr";
square.style.width = 100/ numberOfGrid + "%";
gridBox.appendChild(square)
    }
}


// setting up New grid Button
function sendPopup(){
    numberOfGrid = window.prompt("Enter the number of grid betwen  1-100", 0)
}

btn.addEventListener("click", sendPopup)
btn.addEventListener("click", f=> {allSquares.forEach((el) => el.parentNode.removeChild(el))})
btn.addEventListener("click", start)

btn.addEventListener("click", f => {while(elBox.length > 0) {
    elBox.pop();}
})
// Clear Button 
clrBtn.addEventListener("click", clear)




//Generating Random Color
function randomColor(){
    //random number between 0 and 15
    const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    //create Hex code
    let code = "";
    for(let i=0; i<6; i++){
        code += hexArray[Math.floor(Math.random()*16)]
    }
//hex code starts with #
return `#${code}`;
}


//Hovering Effect (adding RGB)
function hovering (){
    allSquares = document.querySelectorAll(".sqr")
    allSquares.forEach((el) => el.addEventListener("mouseover", f => {el.style.background= randomColor()}))}

    function clear(){
        allSquares = document.querySelectorAll(".sqr")
        allSquares.forEach((el) => el.style.background= "white")}

    
start();
