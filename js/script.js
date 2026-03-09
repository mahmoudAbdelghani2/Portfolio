// ===== THEME TOGGLE FUNCTIONALITY =====
// Initialize theme from localStorage or default to dark mode
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    updateThemeIcon("light");
  } else {
    updateThemeIcon("dark");
  }
}

// Toggle between light and dark mode
function toggleTheme() {
  const body = document.body;
  const isLightMode = body.classList.toggle("light-mode");

  // Save preference to localStorage
  localStorage.setItem("theme", isLightMode ? "light" : "dark");

  // Update icon
  updateThemeIcon(isLightMode ? "light" : "dark");
}

// Update theme toggle icon
function updateThemeIcon(theme) {
  const icon = document.querySelector(".theme-toggle-icon");
  if (icon) {
    icon.textContent = theme === "light" ? "☀️" : "🌙";
  }
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", initTheme);

// ===== MODAL FUNCTIONS =====
function openModal(src, caption) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  modal.style.display = "flex";
  modalImg.src = src;
  captionText.innerText = caption;
}

function closeModal(event) {
  const modal = document.getElementById("imageModal");
  if (event.target.id === "imageModal" || event.target.className === "close") {
    modal.style.display = "none";
  }
}

// ===== ACTIVE NAVIGATION ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  // Add scrolled class to navbar
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Update active nav link
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 150;
    if (pageYOffset >= top) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
