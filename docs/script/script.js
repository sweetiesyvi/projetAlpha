document.addEventListener("DOMContentLoaded", function () {
  console.log("Script.js is connected and running!");

  const themeBtn = document.getElementById("theme-btn");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      console.log("🌙 Dark mode toggled!");
    });
  }
});
