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

  // 🔥 Calories calculation
  let calories = steps * 0.04;
  document.getElementById("calories").innerText =
    calories.toFixed(2) + " Calories";
}
function startBreak() {
  document.getElementById("breakStatus").innerText =
    "Timer started. Break after 25 minutes";

  setTimeout(() => {
    alert("⏰ Time for a break! Rest your eyes.");
    document.getElementById("breakStatus").innerText =
      "Break reminder shown";
  }, 1500000); // 25 minutes
}
window.onload = generateReport