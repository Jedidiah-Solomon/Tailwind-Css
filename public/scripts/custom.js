// Toggle dark mode function
function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");
}

// Toggle dark mode on button click
const darkModeToggle = document.querySelector("#darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  toggleDarkMode();
});
