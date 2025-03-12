// Image Carousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("image-carousel")
  const dotsContainer = document.getElementById("carousel-dots")

  // Image data
  const images = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0861.JPG-TkhxCUxSXGqzy4qWKjQSm8KjXKxrO9.jpeg",
      alt: "Suwarna with Telescope",
      caption: "Exploring the cosmos through astronomy",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250223_154653.jpg-VgI0j6xeC4LGeaFO6JwWjtBK7ngJ83.jpeg",
      alt: "Suwarna Pyakurel Professional Portrait",
      caption: "Undergraduate Engineer & Space Enthusiast",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin1.jpg-s3RRN7xo2pWlgoqr1HiyO4Z029BrWe.jpeg",
      alt: "CS50x Nepal Event",
      caption: "PR and Outreach Lead at CS50x Nepal",
    },
  ]

  let currentIndex = 0
  let isAutoPlaying = true
  let autoPlayInterval

  // Create carousel slides
  function createCarousel() {
    // Clear existing content
    carousel.innerHTML = ""
    dotsContainer.innerHTML = ""

    // Create slides
    images.forEach((image, index) => {
      const slide = document.createElement("div")
      slide.className = `carousel-slide ${index === 0 ? "active" : ""}`

      slide.innerHTML = `
        <img src="${image.url}" alt="${image.alt}">
        <div class="carousel-overlay"></div>
        <div class="carousel-caption">${image.caption}</div>
      `

      carousel.appendChild(slide)

      // Create dot
      const dot = document.createElement("button")
      dot.className = `carousel-dot ${index === 0 ? "active" : ""}`
      dot.setAttribute("aria-label", `Go to image ${index + 1}`)
      dot.addEventListener("click", () => goToSlide(index))

      dotsContainer.appendChild(dot)
    })
  }

  // Go to specific slide
  function goToSlide(index) {
    // Remove active class from current slide and dot
    document.querySelectorAll(".carousel-slide").forEach((slide) => {
      slide.classList.remove("active")
    })

    document.querySelectorAll(".carousel-dot").forEach((dot) => {
      dot.classList.remove("active")
    })

    // Add active class to new slide and dot
    document.querySelectorAll(".carousel-slide")[index].classList.add("active")
    document.querySelectorAll(".carousel-dot")[index].classList.add("active")

    currentIndex = index

    // Reset auto play
    resetAutoPlay()
  }

  // Next slide
  function nextSlide() {
    const newIndex = (currentIndex + 1) % images.length
    goToSlide(newIndex)
  }

  // Previous slide
  function prevSlide() {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    goToSlide(newIndex)
  }

  // Reset auto play
  function resetAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval)
    }

    if (isAutoPlaying) {
      autoPlayInterval = setInterval(nextSlide, 5000)
    }
  }

  // Initialize carousel
  createCarousel()
  resetAutoPlay()

  // Add event listeners for controls
  document.querySelector(".carousel-arrow.prev").addEventListener("click", () => {
    isAutoPlaying = false
    prevSlide()
  })

  document.querySelector(".carousel-arrow.next").addEventListener("click", () => {
    isAutoPlaying = false
    nextSlide()
  })

  // Pause auto play when hovering over carousel
  carousel.addEventListener("mouseenter", () => {
    isAutoPlaying = false
    resetAutoPlay()
  })

  carousel.addEventListener("mouseleave", () => {
    isAutoPlaying = true
    resetAutoPlay()
  })
})

