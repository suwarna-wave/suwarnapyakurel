// Navigation
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenuClose = document.getElementById("mobile-menu-close")
  const mobileNav = document.getElementById("mobile-nav")
  const scrollLinks = document.querySelectorAll("[data-scroll-to]")
  const scrollToTopButton = document.getElementById("scroll-to-top")

  // Toggle mobile menu
  mobileMenuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  mobileMenuClose.addEventListener("click", () => {
    mobileNav.classList.remove("active")
    document.body.style.overflow = "auto"
  })

  // Scroll to section
  function scrollToSection(elementId) {
    const element = document.getElementById(elementId)

    if (element) {
      const offset = 80 // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Close mobile menu if open
      mobileNav.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  }

  // Add event listeners for scroll links
  scrollLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = link.getAttribute("data-scroll-to")
      scrollToSection(sectionId)
    })
  })

  // Scroll to top button
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add("show")
    } else {
      scrollToTopButton.classList.remove("show")
    }
  })

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Tabs
  const tabButtons = document.querySelectorAll(".tab-button")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and panes
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active")
      })

      document.querySelectorAll(".tab-pane").forEach((pane) => {
        pane.classList.remove("active")
      })

      // Add active class to clicked button and corresponding pane
      button.classList.add("active")

      const tabId = button.getAttribute("data-tab")
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })
})

