let water = 0;
let steps = 0;
let sleep = 0;

function addWater() {
  water++;
  document.getElementById("water").innerText = water + " Glass";
}

function addSteps() {
  steps = document.getElementById("stepsInput").value;
  document.getElementById("steps").innerText = steps + " Steps";
}

function addSleep() {
  sleep = document.getElementById("sleepInput").value;
  document.getElementById("sleep").innerText = sleep + " Hours";
}