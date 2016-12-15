// JavaScript Calculator v.1.0
// Created by: Elminster White - elminsterthewhite@gmail.com

"use strict";

const CALC = {};
CALC.inputs = [];
CALC.lastResult = undefined;
CALC.operationsUpdate = document.getElementById("inTxtboxScrOper");
CALC.screenUpdate = document.getElementById("inputTextboxScreen");

// Function that emulates simple calculator
// I'm sending the ID as the function parameter
// This will send the ID (this.id from HTML) as clickedId
function whenClicked(clickedId) {
  // The last element in inputs array is this
  const last = CALC.inputs[CALC.inputs.length - 1];
  
  // Function that updates our inputs on screen
  function update() {
    CALC.operationsUpdate.value = CALC.inputs.join("");
    CALC.screenUpdate.value = CALC.lastResult;
    // Scrolling HTML textbox to right
    CALC.operationsUpdate.scrollLeft = CALC.operationsUpdate.scrollWidth;
    CALC.screenUpdate.scrollLeft = CALC.screenUpdate.scrollWidth;
  }
  
  // Function that does the math
  function evilAndDangerous(math) {
    return eval(math);
  }
  
  // Function that calculates total value using evilAndDangerous function
  function getTotal() {
    // Refresh is the value of last calculation
    // It is always one time declared when getTotal
    // starts, and I don't reassign it when getTotal
    // is running, so I can use const
    const refresh = evilAndDangerous(CALC.inputs.join(""));
    CALC.operationsUpdate.value = CALC.inputs.join("");
    CALC.lastResult = refresh;
    CALC.screenUpdate.value = refresh;
  }

  // Preventing this from happening: 1++2
  if ((clickedId === "+" || clickedId === "-" || clickedId === "*" ||
      clickedId === "/" || clickedId === ".") && 
      (last === "+" || last === "-" || last === "*" || last === "/" ||
      last === ".")) {
    return; // Do nothing when this conditions are fulfilled
  }

  // Handling special buttons
  if (clickedId === "deleteAll") {
    // All Clear
    CALC.inputs = [];
    CALC.lastResult = undefined;
    CALC.operationsUpdate.value = "";
    CALC.screenUpdate.value = 0;
  } else if (clickedId === "backOne") {
    // Clear Entry
    // Only when we have something in "inputs" array we can use pop
    if (CALC.inputs.length > 0 && CALC.inputs.length === 1) {
      // If CALC.inputs.length is === 1 "Clear Entry" behaves just like "AC"
      CALC.inputs = [];
      CALC.lastResult = undefined;
      CALC.operationsUpdate.value = "";
      CALC.screenUpdate.value = 0;
    } else if (CALC.inputs.length > 0 && CALC.inputs.length !== 1) {
      CALC.inputs.pop();
      update();
    }
  } else if (clickedId === "total") {
    // When there is nothing to calculate do nothing
    if ((CALC.inputs.length === 0) && (CALC.lastResult === undefined)) {
      return; // Do nothing when this conditions are fulfilled
    }
    // Calculating total value
    getTotal();
  } else {
    // Pushing numbers and operators to inputs array
    CALC.inputs.push(clickedId);
    update();
    // Showing last pushed button on screen
    CALC.screenUpdate.value = clickedId;
  }
  
  // Function that prints object with global variables to console log each
  // time user hits any calculator button
  (function consoleLogPrinter() {
    console.log(CALC);
  }());
  
}
