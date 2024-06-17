const darkModeToggle = document.querySelector("#darkModeToggle");

darkModeToggle.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark");
});
