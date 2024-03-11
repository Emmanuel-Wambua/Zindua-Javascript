"use strict";
const prompt = require("prompt-sync")({sigint:true});

let length = parseFloat(prompt("Insert the length : "));
let width = parseFloat(prompt("Insert the width : "));

let area = length * width;
let perimeter = (length + width) * 2;

console.log(`Area : ${area}`)
console.log(`Perimeter : ${perimeter}`)