// JavaScript Calculator v.1.0
// Created by: Elminster White - elminsterthewhite@gmail.com

"use strict";

// Stores inputs from the user and also is used to refresh
let inputs = [];
// Attach screenUpdate to id="screen" in HTML
const screenUpdate = document.getElementById("inputTextboxScreen");

// Function that emulates simple calculator
// I'm sending the ID as the function parameter
// This will send the ID (this.id from HTML) as clickedId
function whenClicked(clickedId) {
  // The last element in inputs array is this
  const last = inputs[inputs.length - 1];
  
  // Function that updates our inputs on screen
  function update() {
    screenUpdate.value = inputs.join("");
    // Scrolling HTML textbox to the end
    screenUpdate.scrollLeft = screenUpdate.scrollWidth;
  }
  
  // Function that does the math
  function evil(math) {
    return new Function('return ' + math)();
  }
  
  // Function that calculates total value using evil function
  function getTotal() {
    // Refresh is the value of last calculation
    // It is always one time declared when getTotal
    // starts, and I don't reassign it when getTotal
    // is running, so I can use const
    const refresh = evil(inputs.join(""));
    // Here I am changing inputs, thats why I declare inputs with let
    inputs = [refresh];
    screenUpdate.value = inputs;
  }

  // Preventing this case: 1++2
  if ((clickedId === "+" || clickedId === "-" || clickedId === "*" ||
    clickedId === "/" || clickedId === ".") && (last === "+" ||
    last === "-" || last === "*" || last === "/" || last === ".")) {
    return; // Do nothing when this conditions are fulfilled
  }

  // Handling special buttons
  if (clickedId === "deleteAll") {
    // All Clear
    inputs = [];
    screenUpdate.value = 0;
  } else if (clickedId === "backOne") {
    // Clear Entry
    // Only when we have something in "inputs" array we can use pop
    if (inputs.length > 0 && inputs.length === 1) {
      inputs.pop();
      screenUpdate.value = 0;
    } else if (inputs.length > 0 && inputs.length !== 1) {
      inputs.pop();
      update();
    }
  } else if (clickedId === "total") {
    // Calculating total value
    getTotal();
  } else {
    // Pushing numbers and operators to inputs array
    inputs.push(clickedId);
    update();
  }
}
