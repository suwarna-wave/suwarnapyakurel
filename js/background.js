// Animated Background
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("animated-background")
  const ctx = canvas.getContext("2d")

  let width, height
  let particles = []
  const particleCount = 30
  let mouseX = 0
  let mouseY = 0
  let isMouseMoving = false

  // Colors for light and dark mode
  const lightModeColors = ["#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"]
  const darkModeColors = ["#1e3a8a", "#1e40af", "#1d4ed8", "#2563eb", "#3b82f6"]

  function updateCanvasSize() {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }

  class Particle {
    constructor() {
      this.reset()
    }

    reset() {
      this.x = Math.random() * width
      this.y = Math.random() * height
      this.size = Math.random() * 15 + 5
      this.baseSize = this.size
      this.speedX = Math.random() * 3 - 1.5
      this.speedY = Math.random() * 3 - 1.5
      this.maxSpeed = Math.max(Math.abs(this.speedX), Math.abs(this.speedY))

      // Choose color based on theme
      const colors = document.body.classList.contains("dark-mode") ? darkModeColors : lightModeColors
      this.color = colors[Math.floor(Math.random() * colors.length)]
    }

    update() {
      // Normal movement
      this.x += this.speedX
      this.y += this.speedY

      // Mouse interaction
      if (isMouseMoving) {
        const dx = this.x - mouseX
        const dy = this.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          // Repel particles from mouse
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          this.speedX += Math.cos(angle) * force * 0.5
          this.speedY += Math.sin(angle) * force * 0.5

          // Limit speed
          const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY)
          if (currentSpeed > this.maxSpeed * 2) {
            this.speedX = (this.speedX / currentSpeed) * this.maxSpeed * 2
            this.speedY = (this.speedY / currentSpeed) * this.maxSpeed * 2
          }

          // Increase size when near mouse
          this.size = this.baseSize + this.baseSize * force
        } else {
          // Gradually return to base size
          if (this.size > this.baseSize) {
            this.size -= 0.1
          }
        }
      } else {
        // Gradually return to base size
        if (this.size > this.baseSize) {
          this.size -= 0.1
        }
      }

      // Boundary check
      if (this.x > width) this.x = 0
      else if (this.x < 0) this.x = width
      if (this.y > height) this.y = 0
      else if (this.y < 0) this.y = height
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.globalAlpha = 0.1
      ctx.fill()
    }
  }

  function initParticles() {
    particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height)

    for (let i = 0; i < particles.length; i++) {
      particles[i].update()
      particles[i].draw()
    }

    // Gradually reduce mouse influence
    if (isMouseMoving) {
      isMouseMoving = false
    }

    requestAnimationFrame(animate)
  }

  // Track mouse movement
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    isMouseMoving = true
  })

  // Initialize
  updateCanvasSize()
  initParticles()
  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    updateCanvasSize()
  })

  // Update particles on theme change
  document.getElementById("theme-toggle").addEventListener("click", () => {
    // Give time for the theme to change before updating particles
    setTimeout(() => {
      particles.forEach((particle) => {
        const colors = document.body.classList.contains("dark-mode") ? darkModeColors : lightModeColors
        particle.color = colors[Math.floor(Math.random() * colors.length)]
      })
    }, 300)
  })

  // Add special effect on click
  canvas.addEventListener("click", (e) => {
    const clickX = e.clientX
    const clickY = e.clientY

    // Create explosion effect
    for (let i = 0; i < 10; i++) {
      const particle = new Particle()
      particle.x = clickX
      particle.y = clickY
      particle.size = Math.random() * 20 + 10
      particle.baseSize = particle.size
      particle.speedX = Math.random() * 10 - 5
      particle.speedY = Math.random() * 10 - 5
      particles.push(particle)
    }
  })
})

