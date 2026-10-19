// Theme toggle for a light/dark mode experience.
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("themeToggle");
  const body = document.body;
  const greeting = document.getElementById("greeting");
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    greeting.textContent = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting.textContent = "Good afternoon";
  } else {
    greeting.textContent = "Good evening";
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggleButton.innerHTML = "☀️";
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleButton.innerHTML = isDark ? "☀️" : "🌙";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    formStatus.textContent = `Thanks, ${name}! Your message has been recorded.`;
    form.reset();
  });
});
