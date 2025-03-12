// Main JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })

  // Resume download
  document.getElementById("download-resume").addEventListener("click", (e) => {
    // Show toast notification for successful download
    setTimeout(() => {
      showToast("Success!", "Resume downloaded successfully.")
    }, 1000)
  })

  // Show toast notification
  function showToast(title, description, type = "success") {
    const toast = document.getElementById("toast")
    const toastTitle = document.getElementById("toast-title")
    const toastDescription = document.getElementById("toast-description")
    const toastIcon = document.getElementById("toast-icon")

    toastTitle.textContent = title
    toastDescription.textContent = description

    if (type === "success") {
      toastIcon.className = "fas fa-check-circle toast-icon success"
    } else {
      toastIcon.className = "fas fa-exclamation-circle toast-icon error"
    }

    toast.classList.add("show")

    // Hide toast after 5 seconds
    setTimeout(() => {
      toast.classList.remove("show")
    }, 5000)
  }

  // Add animation to skill cards on hover
  const skillCards = document.querySelectorAll(".skill-card")
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".skill-icon i")
      icon.classList.add("animate-bounce")
      setTimeout(() => {
        icon.classList.remove("animate-bounce")
      }, 1000)
    })
  })

  // Add animation to project cards on hover
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("pulse-animation")
      setTimeout(() => {
        this.classList.remove("pulse-animation")
      }, 1000)
    })
  })

  // Add animation to timeline items on hover
  const timelineItems = document.querySelectorAll(".timeline-item")
  timelineItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const content = this.querySelector(".timeline-content")
      content.classList.add("highlight-animation")
      setTimeout(() => {
        content.classList.remove("highlight-animation")
      }, 1000)
    })
  })

  // Add animation to buttons
  const buttons = document.querySelectorAll(".button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".button-icon")
      if (icon) {
        icon.classList.add("animate-pulse")
        setTimeout(() => {
          icon.classList.remove("animate-pulse")
        }, 1000)
      }
    })
  })

  // Add animation to nav links
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      this.classList.add("nav-click-animation")
      setTimeout(() => {
        this.classList.remove("nav-click-animation")
      }, 500)
    })
  })

  // Add special hover effect for timeline items
  const timelineItems2 = document.querySelectorAll(".timeline-item")
  timelineItems2.forEach((item, index) => {
    // Add staggered animation on page load
    item.setAttribute("data-aos-delay", (index * 100).toString())

    // Add hover effect
    item.addEventListener("mouseenter", function () {
      const badge = this.querySelector(".badge")
      if (badge) {
        badge.style.backgroundColor = "var(--primary)"
        badge.style.color = "var(--primary-foreground)"
      }

      const role = this.querySelector(".timeline-role")
      if (role) {
        role.style.fontWeight = "700"
      }
    })

    item.addEventListener("mouseleave", function () {
      const badge = this.querySelector(".badge")
      if (badge) {
        badge.style.backgroundColor = ""
        badge.style.color = ""
      }

      const role = this.querySelector(".timeline-role")
      if (role) {
        role.style.fontWeight = ""
      }
    })
  })
})

