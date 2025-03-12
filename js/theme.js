// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")

  // Check for saved theme preference or use default
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "light") {
    document.body.classList.remove("dark-mode")
  } else {
    document.body.classList.add("dark-mode")
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    // Save theme preference
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light"
    localStorage.setItem("theme", currentTheme)

    // Update background particles
    const backgroundEvent = new Event("themeChanged")
    document.dispatchEvent(backgroundEvent)
  })
})

