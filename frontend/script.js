function saveProfile() {
  console.log("Save Profile clicked");

  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");

  if (!name || !age || !weight || !height) {
    alert("Input ID mismatch");
    return;
  }

  if (
    name.value === "" ||
    age.value === "" ||
    weight.value === "" ||
    height.value === ""
  ) {
    alert("Fill all profile fields");
    return;
  }

  const profile = {
    name: name.value,
    age: age.value,
    weight: weight.value,
    height: height.value
  };

  localStorage.setItem("profile", JSON.stringify(profile));

  document.getElementById("profileStatus").innerText =
    `Saved ✅ ${profile.name}, Age ${profile.age}`;

  console.log("Profile saved:", profile);
}

function addWater() {
  let water = Number(localStorage.getItem("water")) || 0;

  if (water >= 15) {
    alert("💧 Daily water limit reached!");
    return;
  }

  water++;
  localStorage.setItem("water", water);

  document.getElementById("water").innerText = water + " Glass";
  generateReport();
  checkGoals();
}

function addSteps() {
  let steps = document.getElementById("stepsInput").value;
  if (!steps) return;

  localStorage.setItem("steps", steps);

  let history = JSON.parse(localStorage.getItem("stepsHistory")) || [];
  history.push(Number(steps));
  localStorage.setItem("stepsHistory", JSON.stringify(history));

  document.getElementById("steps").innerText = steps + " Steps";
  generateReport();
  drawChart();
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
  }, 1500000); // 25 minute


function updateStreak() {
  let today = new Date().toISOString().split("T")[0];

  let streak = parseInt(localStorage.getItem("streak")) || 0;
  let lastDate = localStorage.getItem("lastDate");

  let steps = parseInt(localStorage.getItem("steps")) || 0;

  // Rule: minimum 3000 steps for streak
  if (steps >= 3000) {
    if (lastDate !== today) {
      streak++;
      localStorage.setItem("streak", streak);
      localStorage.setItem("lastDate", today);
    }
  } else {
    streak = 0;
    localStorage.setItem("streak", streak);
  }

  document.getElementById("streak").innerText =
    "🔥 Streak: " + streak + " day(s)";
}
window.onload = function () {
  const savedProfile = localStorage.getItem("profile");
  if (savedProfile) {
    const p = JSON.parse(savedProfile);
    document.getElementById("name").value = p.name;
    document.getElementById("age").value = p.age;
    document.getElementById("weight").value = p.weight;
    document.getElementById("height").value = p.height;

    document.getElementById("profileStatus").innerText =
      "Profile loaded from storage ✅";
  }
};
function loadProfile() {
  const savedProfile = localStorage.getItem("profile");

  if (!savedProfile) return;

  const profile = JSON.parse(savedProfile);

  document.getElementById("name").value = profile.name;
  document.getElementById("age").value = profile.age;
  document.getElementById("weight").value = profile.weight;
  document.getElementById("height").value = profile.height;

  document.getElementById("profileStatus").innerText =
    `Profile loaded ✅ ${profile.name}`;
}
window.onload = function () {
  loadProfile();
};
window.onload = function () {
  loadProfile();
  generateReport(); // agar pehle se hai
};
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

/* Load theme on refresh */
window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
});
function drawChart() {
  const chart = document.getElementById("chart");
  chart.innerHTML = "";

  let history = JSON.parse(localStorage.getItem("stepsHistory")) || [];

  history.slice(-7).forEach(step => {
    let bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = Math.min(step / 10, 100) + "px";
    chart.appendChild(bar);
  });
}
window.onload = function () {
  generateReport();
  drawChart();
};