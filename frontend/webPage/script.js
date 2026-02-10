// Simple interaction example
/*document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Feature coming soon 🚀");
  });
});*/

document.querySelectorAll(".btn").forEach(btn => {
  btn.onclick = () => alert("Feature coming soon 🚀");
});
