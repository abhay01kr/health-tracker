function addWater() {
  let water = localStorage.getItem("water");
  water = water ? parseInt(water) + 1 : 1;

  localStorage.setItem("water", water);
  document.getElementById("water").innerText = water + " Glass";

  generateReport();
}

function addSteps() {
  let steps = document.getElementById("stepsInput").value;
  localStorage.setItem("steps", steps);

  document.getElementById("steps").innerText = steps + " Steps";
  generateReport();
}

function addSleep() {
  let sleep = document.getElementById("sleepInput").value;
  localStorage.setItem("sleep", sleep);

  document.getElementById("sleep").innerText = sleep + " Hours";
  generateReport();
}

function generateReport() {
  let steps = localStorage.getItem("steps") || 0;
  let sleep = localStorage.getItem("sleep") || 0;
  let water = localStorage.getItem("water") || 0;

  document.getElementById("report").innerText =
    `Steps: ${steps} Steps | Sleep: ${sleep} Hours | Water: ${water} Glass`;
}

window.onload = generateReport;

// Load saved data on page load
window.onload = function () {
  if (localStorage.getItem("water")) {
    document.getElementById("water").innerText =
      localStorage.getItem("water") + " Glass";
  }

  if (localStorage.getItem("steps")) {
    document.getElementById("steps").innerText =
      localStorage.getItem("steps") + " Steps";
  }

  if (localStorage.getItem("sleep")) {
    document.getElementById("sleep").innerText =
      localStorage.getItem("sleep") + " Hours";
  }

  generateReport();
};