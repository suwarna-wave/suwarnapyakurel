// Contact Form
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")
  const submitButton = contactForm.querySelector('button[type="submit"]')
  const submitText = document.getElementById("submit-text")
  const submitLoading = document.getElementById("submit-loading")
  const buttonIcon = submitButton.querySelector(".button-icon")

  // Form validation
  function validateForm() {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")

    const nameError = document.getElementById("name-error")
    const emailError = document.getElementById("email-error")
    const messageError = document.getElementById("message-error")

    let isValid = true

    // Validate name
    if (name.value.trim().length < 2) {
      nameError.textContent = "Name must be at least 2 characters."
      name.classList.add("error-input")
      isValid = false
    } else {
      nameError.textContent = ""
      name.classList.remove("error-input")
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address."
      email.classList.add("error-input")
      isValid = false
    } else {
      emailError.textContent = ""
      email.classList.remove("error-input")
    }

    // Validate message
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters."
      message.classList.add("error-input")
      isValid = false
    } else {
      messageError.textContent = ""
      message.classList.remove("error-input")
    }

    return isValid
  }

  // Add animation to form inputs
  const formInputs = contactForm.querySelectorAll("input, textarea")
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("input-focused")
    })

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("input-focused")
    })
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

  // Close toast on button click
  document.getElementById("toast-close").addEventListener("click", () => {
    document.getElementById("toast").classList.remove("show")
  })

  // Handle form submission
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      // Shake the form on error
      contactForm.classList.add("animate-shake")
      setTimeout(() => {
        contactForm.classList.remove("animate-shake")
      }, 500)
      return
    }

    // Show loading state
    submitText.classList.add("hidden")
    submitLoading.classList.remove("hidden")
    buttonIcon.style.display = "none"
    submitButton.disabled = true

    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      contactForm.reset()

      // Show success message
      showToast("Message sent!", "Thank you for your message. I'll get back to you soon.")

      // Add success animation to the form
      contactForm.classList.add("animate-pulse")
      setTimeout(() => {
        contactForm.classList.remove("animate-pulse")
      }, 1000)
    } catch (error) {
      // Show error message
      showToast("Something went wrong!", "Your message couldn't be sent. Please try again later.", "error")
    } finally {
      // Reset button state
      submitText.classList.remove("hidden")
      submitLoading.classList.add("hidden")
      buttonIcon.style.display = "inline-block"
      submitButton.disabled = false
    }
  })
})

