// Pomodoro Clock v.1.0
// Created by: Elminster White - elminsterthewhite@gmail.com

"use strict";

// Code wrapped in a closure to avoid global variables
(function() {
  let countdown;
  let timeIsRunnig = false;
  let actionTypeSwitch = "Work";

  const timerDisplay = document.querySelector(".display__time-left");
  const infoDisplay = document.querySelector(".display__info");
  const endTime = document.querySelector(".display__end-time");
  const buttons = document.querySelectorAll("[data-time]");
  const breakSettings = document.querySelectorAll(".settings__breakButton");
  const workSettings = document.querySelectorAll(".settings__workButton");
  const breakValue = document.querySelector("#valueBreak");
  const workValue = document.querySelector("#valueWork");
  const buttonMain = document.querySelector("#buttonMain");

  let workValueSettings = 25; // Default work session value in min
  let breakValueSettings = 5; // Default break session value in min

  workValue.textContent = workValueSettings + ' min';
  breakValue.textContent = breakValueSettings + ' min';
  
  timerDisplay.textContent = `${ workValueSettings}:00`;
  infoDisplay.textContent = "Are you ready?";
  endTime.textContent = "Press START";

  function timer(seconds) {
    // Clear any existing timers
    clearInterval(countdown);
    // Current time in ms
    const now = Date.now();
    const future = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(future);

    function timeCalc() {
      const secondsLeft = Math.round((future - Date.now()) / 1000);
      // Check if we should stop it
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      // Display it
      displayTimeLeft(secondsLeft);
    }
    
    countdown = setInterval(timeCalc, 1000);
  }

  function startTimer() {
    const seconds = workValueSettings * 60;
    actionTypeSwitch = "Work";
    infoDisplay.textContent = "Working hard!";
    timer(seconds);
  }

  function startBreak() {
    const seconds = breakValueSettings * 60;
    actionTypeSwitch = "Break";
    infoDisplay.textContent = "Short break!";
    timer(seconds);
  }

  function resetTimer() {
    const seconds = workValueSettings * 60;
    // Clear any existing timers
    clearInterval(countdown);
    // Refresh display
    displayTimeLeft(seconds);
    infoDisplay.textContent = "Are you ready?";
    endTime.textContent = "Press START";
  }

  function startAndReset() {
    let name = "START";
    if (timeIsRunnig === false) {
      timeIsRunnig = true;
      name = "RESET";
      this.innerHTML = name;
      startTimer();
    } else {
      timeIsRunnig = false;
      name = "START";
      this.innerHTML = name;
      resetTimer();
    }
  }

  function playSoundStartBreak() {
    // Returns the first Element within the document
    // that matches the specified group of selectors.
    const audio = document.querySelector(`audio[data-sound="workDone"]`);
    if(!audio) return; // Stop the function from running
    audio.currentTime = 0; // Rewind to the start
    audio.play();
  }

  function playSoundBackToWork() {
    // Returns the first Element within the document
    // that matches the specified group of selectors.
    const audio = document.querySelector(`audio[data-sound="backToWork"]`);
    if(!audio) return; // Stop the function from running
    audio.currentTime = 0; // Rewind to the start
    audio.play();
  }

  function displayTimeLeft(sec) {
    const hours = parseFloat(Math.floor(sec / 3600));
    const minutes = parseFloat(Math.floor(sec / 60));
    const remainderMinutes = parseFloat(minutes % 60);
    const remainderSeconds = parseFloat(sec % 60);
    console.log(hours, remainderMinutes, remainderSeconds);
    
    // Play sound when timer gets to 0
    if (parseFloat(sec) === 0) {
      if (actionTypeSwitch === "Work") {
        playSoundStartBreak()
        startBreak();
      } else {
        playSoundBackToWork();
        startTimer();
      }
    }

    // Hide hours when hours is 0
    let hoursFirstStatement = hours < 10 ? "0" : "";
    let hoursSecondStatement = hours;
    let colon = ":";

    if (hours === 0) {
      hoursFirstStatement = "";
      hoursSecondStatement = "";
      colon = "";
    }

    // This `${}` allows adding javascript variables in strings
    const display = `${hoursFirstStatement}${hoursSecondStatement}${colon}${
      remainderMinutes < 10 ? "0" : ""}${remainderMinutes}:${
      remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display + " " + "(" + actionTypeSwitch + ")";
  }

  function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `This session ends at ${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""}${minutes}`;
  }

  function changeBreakSettings() {
    const breakChangeValue = parseInt(this.dataset.settings);
    if ((breakValueSettings <= 1 && breakChangeValue === -1) ||
        (breakValueSettings >= 30 && breakChangeValue === 1))  {
      return; // Do nothing when this conditions are fulfilled
    } else {
      breakValueSettings = breakValueSettings + breakChangeValue;
      breakValue.textContent = breakValueSettings + ' min';
    }
  }

  function changeWorkSettings() {
    const workChangeValue = parseInt(this.dataset.settings);
    if ((workValueSettings <= 5 && workChangeValue === -1) ||
        (workValueSettings >= 120 && workChangeValue === 1))  {
      return; // Do nothing when this conditions are fulfilled
    } else {
      workValueSettings = workValueSettings + workChangeValue;
      workValue.textContent = workValueSettings + ' min';
    }
  }

  breakSettings.forEach(button => button.addEventListener("click", changeBreakSettings));
  workSettings.forEach(button => button.addEventListener("click", changeWorkSettings));
  buttonMain.addEventListener("click", startAndReset);

}());