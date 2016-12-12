// JavaScript Calculator v.1.0
// Created by: Elminster White - elminsterthewhite@gmail.com

// Attach screenUpdate to id="screen" in HTML
let screenUpdate = document.getElementById("inputTextboxScreen");
// Stores inputs from the user
let inputs = [];

// I need to send the ID as the function parameters
// This will send the ID (this.id from HTML) as clickedId
function whenClicked(clickedId) {
  // The last element in inputs array is -> inputs[inputs.length - 1]
  let last = inputs[inputs.length - 1];
  // Preventing for example 7++8
  if ((clickedId === "+" || clickedId === "-" || clickedId === "*" ||
    clickedId === "/" || clickedId === ".") && (last === "+" ||
    last === "-" || last === "*" || last === "/" || last === ".")) {
    return; // Do nothing
  }
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
    // Pushing numbers and operators to an array
    inputs.push(clickedId);
    update();
  }
}

// Updates our inputs on screen
function update() {
  screenUpdate.value = inputs.join("");
  // Scrolling HTML textbox to the end
  screenUpdate.scrollLeft = screenUpdate.scrollWidth;
}

// Calculates total value
function getTotal() {
  // Refresh is the value of last calculation
  let refresh;
  refresh = evil(inputs.join(""));
  inputs = [refresh];
  screenUpdate.value = refresh;
}

// Doing math
function evil(math) {
  return new Function('return ' + math)();
}