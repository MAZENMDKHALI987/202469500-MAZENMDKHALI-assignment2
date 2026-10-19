// Theme toggle for a light/dark mode experience.
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("themeToggle");
  const body = document.body;
  const greeting = document.getElementById("greeting");
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const sentMessagesSummary = document.getElementById("sentMessagesSummary");
  const sentMessagesEmpty = document.getElementById("sentMessagesEmpty");
  const sentMessagesList = document.getElementById("sentMessagesList");
  let sentMessageCount = 0;

  form.noValidate = true;

  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    greeting.textContent = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting.textContent = "Good afternoon";
  } else {
    greeting.textContent = "Good evening";
  }

// 3. Data Handling
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
//End of 3. Data Handling

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nameInput = form.elements.namedItem("name");
    const emailInput = form.elements.namedItem("email");
    const messageInput = form.elements.namedItem("message");
    const validationErrors = [];
    let firstInvalidInput;

    if (!name) {
      validationErrors.push("Please enter your name.");
      firstInvalidInput = nameInput;
      nameInput.setAttribute("aria-invalid", "true");
    } else {
      nameInput.removeAttribute("aria-invalid");
    }

    if (!email) {
      validationErrors.push("Please enter your email address.");
      firstInvalidInput = firstInvalidInput || emailInput;
      emailInput.setAttribute("aria-invalid", "true");
    } else if (!emailInput.validity.valid) {
      validationErrors.push("Please enter a valid email address.");
      firstInvalidInput = firstInvalidInput || emailInput;
      emailInput.setAttribute("aria-invalid", "true");
    } else {
      emailInput.removeAttribute("aria-invalid");
    }

    if (!message) {
      validationErrors.push("Please enter a message.");
      firstInvalidInput = firstInvalidInput || messageInput;
      messageInput.setAttribute("aria-invalid", "true");
    } else {
      messageInput.removeAttribute("aria-invalid");
    }

    if (validationErrors.length > 0) {
      formStatus.textContent = validationErrors.join(" ");
      formStatus.classList.add("is-error");
      firstInvalidInput.focus();
      return;
    }

    const item = document.createElement("li");
    const sender = document.createElement("strong");
    const senderEmail = document.createElement("span");
    const messageText = document.createElement("p");

    sender.textContent = name;
    senderEmail.textContent = email;
    messageText.textContent = message;
    item.append(sender, senderEmail, messageText);
    sentMessagesList.append(item);

    sentMessageCount += 1;
    sentMessagesSummary.textContent = `Sent messages (${sentMessageCount})`;
    sentMessagesEmpty.hidden = true;
    document.querySelector(".sent-messages").open = true;

    formStatus.classList.remove("is-error");
    formStatus.textContent = `Thanks, ${name}! Your message has been recorded.`;
    form.reset();
  });
});
