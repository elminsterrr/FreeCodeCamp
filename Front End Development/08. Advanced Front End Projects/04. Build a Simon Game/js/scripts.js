// Simon Game v.1.0
// Created by: Elminster White - elminsterthewhite@gmail.com

"use strict";

// Code wrapped in a closure to avoid global variables
(function () {
  const sides = document.querySelector(".sides");
  const swButton = document.querySelector(".switch");
  const keys = document.querySelectorAll(".key");
  const buttons = document.querySelectorAll("[data-array]");
  const info = document.querySelector(".info");
  let time;
  let timeAt;
  let timeSt;
  let timePa;
  let simon = [];
  let simon2 = [];
  let fakeTurn = 0;
  let real = 0;
  let showTurn = 0;
  let checkedAndOK = false;
  info.textContent = "Press New Game button to start!";
  sides.textContent = `Turn: ${showTurn}`;
  // Select a random number between 0 and 3
  function randomNumber() {
    function randomRange(myMin, myMax) {
      return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    }
    return randomRange(0, 3);
  }
  // Generate an array of 20 numbers between 0 and 3
  function soundQueue() {
    for (let i = 0; i < 20; i += 1) {
      simon.push(randomNumber());
    }
  }
  // Decode an array of 20 numbers to audio keyCodes
  function decode(simon) {
    const decoded = simon.map(function(oneElement) {
      if (oneElement === 0) {
        oneElement = 81;
      }
      if (oneElement === 1) {
        oneElement = 87;
      }
      if (oneElement === 2) {
        oneElement = 65;
      }
      if (oneElement === 3) {
        oneElement = 83;
      }
      return oneElement;
    });
    return decoded;
  }
  // Play sound after mouse click
  function playSoundAfterMouse(event) {
    console.log(this.dataset.array);
    simon2.push(parseInt(this.dataset.array));
    const audio = document.querySelector(`audio[data-key="${this.dataset.array}"]`);
    const key = document.querySelector(`.key[data-key="${this.dataset.array}"]`);
    if(!audio) return; // Stop the function from running
    audio.currentTime = 0; // Rewind audio file to the start
    audio.play();
    key.classList.add("playing");
    displayR();
    testArray();
  }
  // Play sound
  function playSoundAfterKeyboard(event) {
    console.log(event.keyCode);
    simon2.push(parseInt(event.keyCode));
    // Return the first element within the document
    // that matches the specified group of selectors.
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; // Stop the function from running
    audio.currentTime = 0; // Rewind audio file to the start
    audio.play();
    key.classList.add("playing");
    displayR();
    testArray();
  }

  function playSimon(inputTurn) {
    const codeAudio = decode(simon)[inputTurn];
    const audio = document.querySelector(`audio[data-key="${codeAudio}"]`);
    const key = document.querySelector(`.key[data-key="${codeAudio}"]`);
    if(!audio) return; // Stop the function from running
    if (inputTurn === real) {
      function timePause() {
        info.textContent = `YOUR turn!`
      }
      timePa = setTimeout(timePause, 2000);
    }
    audio.currentTime = 0; // Rewind audio file to the start
    audio.play();
    key.classList.add("playing");
  }

  function realSimon() {
    checkedAndOK = false;
    if (fakeTurn === 0) {
      showTurn += 1;
      playSimon(fakeTurn);
    } else if (fakeTurn !== 0) {
      showTurn += 1;
      simon2.map(function(currVal, index) {
        if (currVal === decode(simon)[index]) {
          console.log("One element checked!");
        }
      });
      if (simon2.length === (real + 1)) {
        console.log("All elements checked!");
        checkedAndOK = true;
      }
      if ((simon2.length === 20) && (simon2[19] === decode(simon)[19])) {
        clearTimeout(time);
        clearTimeout(timeAt);
        clearTimeout(timeSt);
        clearTimeout(timePa);
        console.log("You have won!");
        info.textContent = "You have won!";
        (function myConfirm() {
          if (confirm("You have won! Press New Game button to stat new game!") === true) {
            window.location.reload();
          } else {
            window.location.reload();
          }
        }());
      }
      timeAt = setTimeout(afterTimeout, 2000);
    }
    displayR();
    fakeTurn += 1;
  }

  function afterTimeout() {
    info.textContent = `SIMON turn!`;
    sides.textContent = `Turn: ${showTurn}`;
    function start(counter){
      if (counter <= real) {
        time = setTimeout(function(){
          playSimon(counter);
          counter += 1;
          start(counter);
        }, 1500);
      }
    }
    simon2 = [];
    real += 1;
    start(0);
  }
  // Remove transition after it just happened
  function removeTransition(event) {
    if (event.propertyName !== "transform") return; // skip if it isn't transform
    this.classList.remove("playing");
  }

  function displayR() {
    console.log(decode(simon));
    console.log(simon2);
    if ((simon2[simon2.length - 1]) !== (decode(simon)[simon2.length - 1])) {
      clearTimeout(time);
      clearTimeout(timeAt);
      clearTimeout(timeSt);
      clearTimeout(timePa);
      console.log("GAME OVER!");
      info.textContent = "GAME OVER!";
      alert("GAME OVER!")
      window.location.reload();
      return;
    }
    console.log(`-------- IT IS TURN ${real + 1} --------`);
  }

  function startGame() {
    clearTimeout(time);
    clearTimeout(timeAt);
    clearTimeout(timeSt);
    clearTimeout(timePa);
    simon = [];
    simon2 = [];
    fakeTurn = 0;
    real = 0;
    showTurn = 0;
    checkedAndOK = false;
    console.log("New game started by player!");
    // Start new default game
    // Draw 20 sequential sounds for new game
    soundQueue();
    // Decode 20 sequential sounds and get ready for new game
    info.textContent = `SIMON turn!`;
    sides.textContent = `Turn: 1`;
    timeSt = setTimeout(realSimon, 1000);
  }

  function testArray() {
    console.log("simon2.length", simon2.length );
    console.log("real + 1", real + 1 );
    if ((simon2.length === real + 1) && (simon2.length === 1) && (simon2[0] === decode(simon)[0])) {
      realSimon();
    }
    if ((simon2.length === real + 1) && (simon2.length !== 1) && (checkedAndOK === true)) {
      realSimon();
    }
  }
  // Handle buttons
  swButton.addEventListener("click", startGame);
  buttons.forEach(butt => butt.addEventListener("click", playSoundAfterMouse));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener("keydown", playSoundAfterKeyboard);
}());
