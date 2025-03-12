// Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing-effect")
  const texts = [
    "Undergraduate Engineer",
    "Space Enthusiast",
    "Robotics Developer",
    "Python Programmer",
    "AI Enthusiast",
  ]

  let currentTextIndex = 0
  let currentText = ""
  let isDeleting = false
  let isPaused = false

  const typingSpeed = 100 // Speed for typing
  const deletingSpeed = 50 // Speed for deleting
  const delayBetweenTexts = 1500 // Delay between complete text and deleting

  function type() {
    // Current full text from the array
    const fullText = texts[currentTextIndex]

    // If deleting
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1)

      // If deleted completely, move to typing the next text
      if (currentText.length === 0) {
        isDeleting = false
        currentTextIndex = (currentTextIndex + 1) % texts.length
      }
    }
    // If typing
    else {
      currentText = fullText.substring(0, currentText.length + 1)

      // If typed completely, pause then start deleting
      if (currentText.length === fullText.length) {
        isPaused = true
        setTimeout(() => {
          isPaused = false
          isDeleting = true
        }, delayBetweenTexts)
      }
    }

    // Update the element with a blinking cursor
    typingElement.innerHTML = `${currentText}<span class="typing-cursor"></span>`

    // Add a subtle animation when typing
    if (!isDeleting && currentText.length === fullText.length) {
      typingElement.classList.add("animate-pulse")
      setTimeout(() => {
        typingElement.classList.remove("animate-pulse")
      }, 500)
    }

    // Schedule the next update
    const timeout = setTimeout(type, isPaused ? delayBetweenTexts : isDeleting ? deletingSpeed : typingSpeed)
  }

  // Start the typing effect
  type()

  // Add click event to restart animation
  typingElement.addEventListener("click", () => {
    // Reset and restart the animation
    currentTextIndex = (currentTextIndex + 1) % texts.length
    currentText = ""
    isDeleting = false
    isPaused = false

    // Add a special effect when clicked
    typingElement.classList.add("animate-rubber-band")
    setTimeout(() => {
      typingElement.classList.remove("animate-rubber-band")
    }, 1000)
  })
})

