// Projects
document.addEventListener("DOMContentLoaded", () => {
  const projectsGrid = document.getElementById("projects-grid")
  const filterButtons = document.querySelectorAll(".filter-button")

  // Project data
  const projects = [
    {
      title: "AVL Tree Visualization",
      description:
        "Interactive visualization of AVL tree operations including insertion, deletion, and balancing with step-by-step animation.",
      tags: ["Data Structures", "JavaScript", "Algorithms", "Visualization"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AVLtree-t3oByOehOEEG86GgLcmC52S7nOW8Tz.png",
      github: "https://github.com/suwarna-wave/DSA-lab/tree/main/Projects",
      link: "https://github.com/suwarna-wave/DSA-lab/tree/main/Projects",
      category: "Data Structures",
    },
    {
      title: "Bank Management System",
      description:
        "A comprehensive C-based banking system with account management, transactions, and secure data handling.",
      tags: ["C", "File Handling", "Data Management"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bankmanagement%20system.jpg-TL3et1neNbvTLXUICRhL4IFyeKhbtw.jpeg",
      github: "https://github.com/suwarna-wave/Bank-Management-System",
      category: "C Programming",
    },
    {
      title: "Library Management System",
      description: "Object-oriented C++ application for efficient library resource management and book tracking.",
      tags: ["C++", "OOP", "File Handling"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/library%20management%20system.jpg-bIhfdlfaZFxa7PcE4dMkNvYY1fVE0O.jpeg",
      github: "https://github.com/suwarna-wave/Library-Management-System",
      category: "C++",
    },
    {
      title: "Traveling Salesman Problem",
      description:
        "Interactive visualization of TSP solutions using various algorithms and path optimization techniques.",
      tags: ["Python", "Algorithms", "Graph Theory"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSP.jpg-7Dybpp4MKbMERrdD3d2agyanyWXyFO.jpeg",
      github: "https://github.com/suwarna-wave/DSA-lab/tree/main/Projects",
      category: "Data Structures",
    },
    {
      title: "IoT Based Smart Agriculture",
      description: "Smart farming system using IoT sensors for monitoring and automation of agricultural processes.",
      tags: ["IoT", "Python", "Sensors", "Automation"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agriculture%20system.jpg-S1u020WqhOcLXvIBhLs9ngJEp613il.jpeg",
      github: "https://github.com/suwarna-wave/IOT-Based-Agriculture-System",
      category: "IoT",
    },
  ]

  // Create project cards
  function createProjectCards(filteredProjects) {
    // Clear existing content
    projectsGrid.innerHTML = ""

    // Create cards
    filteredProjects.forEach((project) => {
      const card = document.createElement("div")
      card.className = "project-card"
      card.setAttribute("data-aos", "fade-up")

      // Create tags HTML
      const tagsHTML = project.tags
        .map(
          (tag) => `
        <span class="project-tag">${tag}</span>
      `,
        )
        .join("")

      card.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
          <div class="project-overlay">
            ${
              project.link
                ? `
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-button project-button-primary">
                <i class="fas fa-external-link-alt"></i>
                View Project
              </a>
            `
                : ""
            }
            ${
              project.github
                ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-button project-button-secondary">
                <i class="fab fa-github"></i>
                Source Code
              </a>
            `
                : ""
            }
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
        </div>
      `

      projectsGrid.appendChild(card)
    })

    // Refresh AOS animations
    if (typeof AOS !== "undefined") {
      AOS.refresh()
    }
  }

  // Filter projects
  function filterProjects(category) {
    const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

    createProjectCards(filteredProjects)
  }

  // Initialize projects
  createProjectCards(projects)

  // Add event listeners for filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      button.classList.add("active")

      // Filter projects
      const category = button.getAttribute("data-filter")
      filterProjects(category)
    })
  })
})

