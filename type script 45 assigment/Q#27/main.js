"use strict";
//define variable
let alienColour = "green";
//using if and else-if statements
if (alienColour === "green") {
    console.log("you shot down green alien you have earned 5 poinst");
}
else if (alienColour === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (alienColour === "red") {
    console.log("you shot down red alien you have earned 15 points");
}
//version 2
let alienColour2 = "yellow";
if (alienColour2 === "green") {
    console.log("you shot down green alien you have earned 15 points");
}
else if (alienColour2 === "yellow") {
    console.log("(version 2) you shot down yellow alien you have earned 10 points");
}
else if (alienColour2 === "red") {
    console.log("you shot down red alien you have earned 15 points");
}
//version 3
let alienColour3 = "red";
if (alienColour3 === "green") {
    console.log("you shot down green alien you have earned 5 points");
}
else if (alienColour3 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (alienColour3 === "red") {
    console.log("(vesion 3) you shot down red alien you have earned 15 points");
}
