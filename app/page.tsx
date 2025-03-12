"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { SkillCard } from "@/components/skill-card"
import { ExperienceCard } from "@/components/experience-card"
import { EducationCard } from "@/components/education-card"
import { ContactForm } from "@/components/contact-form"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { TypingEffect } from "@/components/ui/typing-effect"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { MobileNav } from "@/components/ui/mobile-nav"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { SectionHeading } from "@/components/section-heading"
import { DownloadResumeButton } from "@/components/download-resume-button"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { useScroll } from "@/hooks/use-scroll"
import { ProjectFilter } from "@/components/project-filter"

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

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

  const categories = [...new Set(projects.map((project) => project.category))]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="container py-24 space-y-8">
      <SectionHeading title="Featured Projects" description="Some of my recent work and contributions" />

      <ProjectFilter categories={categories} onFilterChange={setActiveFilter} activeFilter={activeFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                github={project.github}
                link={project.link}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center pt-8">
        <Button asChild variant="outline" className="group relative overflow-hidden">
          <Link href="https://github.com/suwarna-wave" target="_blank" rel="noopener noreferrer">
            <span className="absolute inset-0 bg-primary/10 group-hover:translate-y-full transition-transform duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              View More on GitHub
            </span>
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollToSection } = useScroll()

  // Ensure components that depend on client-side features only render after mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

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

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground relative">
      <AnimatedGradientBackground />
      <ScrollToTop />

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">Suwarna Pyakurel</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.replace("#", ""))}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="https://github.com/suwarna-wave" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/suwarnapyakurel/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <MobileNav links={navLinks} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="text-primary">Hello, I'm Suwarna</span>
              <br />
              <TypingEffect
                texts={["Undergraduate Engineer", "Space Enthusiast", "Robotics Developer", "Python Programmer"]}
              />
            </h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Passionate about space robotics, web development, and machine learning. Merging technology with the
              mysteries of space.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="group relative overflow-hidden">
                <Link href="#contact">
                  <span className="absolute inset-0 bg-primary/10 group-hover:translate-y-full transition-transform duration-300"></span>
                  <span className="relative z-10">Get in Touch</span>
                </Link>
              </Button>
              <DownloadResumeButton />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-[600px] overflow-hidden rounded-xl border-4 border-primary/20 bg-primary/10">
              <ImageCarousel images={images} />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="border-border/40 bg-background/50 backdrop-blur hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <CardContent className="flex items-center gap-2 p-4">
              <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span>Biratnagar, Koshi Province, Nepal</span>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-background/50 backdrop-blur hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <CardContent className="flex items-center gap-2 p-4">
              <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span>9840036060</span>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-background/50 backdrop-blur hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <CardContent className="flex items-center gap-2 p-4">
              <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span>suwarnapyakurel5@gmail.com</span>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 space-y-8">
        <SectionHeading title="About Me" description="My journey, passion, and vision" />
        <motion.div
          className="mx-auto max-w-3xl space-y-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I'm an enthusiastic space-robotics learner, currently pursuing an undergraduate degree in Electronics,
            Communication, and Information Engineering. As a proud member of the Nepal Astronomical Society (NASO), I'm
            driven to merge technology with the mysteries of space.
          </p>
          <p>
            I've completed numerous robotics projects and am currently mastering the Robot Operating System (ROS). With
            experience in web scraping, I'm now diving into Django to pursue backend development to connect my projects
            and research with the web. My journey also includes exploring open-source projects, reflecting my commitment
            to collaborative innovation.
          </p>
          <p>
            I advocate for diversity and women in tech as a local volunteer, striving to inspire and create inclusive
            opportunities. With experience in scripting with Python, and team leadership, I constantly explore practical
            technologies to address real-world challenges.
          </p>
          <p className="font-medium text-primary">Let's connect and embark on this exciting journey together!</p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 space-y-8 bg-muted/30">
        <SectionHeading title="My Skills" description="Technologies and domains I specialize in" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            title="Robotics & IoT"
            icon="Robot"
            description="Cutting-edge robotic solutions and Internet of Things applications developed at a professional level."
            index={0}
          />
          <SkillCard
            title="Web Development"
            icon="Code"
            description="Frontend development and web scraping techniques for data extraction and analysis."
            index={1}
          />
          <SkillCard
            title="Astronomy & Space Science"
            icon="Rocket"
            description="Engaging in astronomical outreach, pioneering space robotics research, and tackling innovative space apps challenges."
            index={2}
          />
          <SkillCard
            title="Python Programming"
            icon="Brain"
            description="Developing advanced scripts, solutions and applications using Python, OpenCV, and machine learning."
            index={3}
          />
          <SkillCard
            title="C and C++"
            icon="Brain"
            description="Implementing OOPs concepts with strong foundational knowledge in C and C++ programming."
            index={4}
          />
          <SkillCard
            title="Git & GitHub"
            icon="Code"
            description="Version control and collaborative development using Git and GitHub platforms."
            index={5}
          />
          <SkillCard
            title="Linux"
            icon="Terminal"
            description="Working with Linux operating systems for development and system administration."
            index={6}
          />
          <SkillCard
            title="Event Management"
            icon="Calendar"
            description="Organizing and managing technical events, workshops, and community outreach programs."
            index={7}
          />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience & Education Section */}
      <section id="experience" className="container py-24 space-y-8 bg-muted/30">
        <SectionHeading title="Experience & Education" description="My professional journey and academic background" />
        <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="space-y-4 pt-4">
            <ExperienceCard
              title="CS50 AI Nepal, EXCESS"
              role="PR and Outreach Lead"
              period="Oct 2024 - Present"
              description="Managing public relations, coordinating outreach efforts to engage communities, and fostering collaborations to expand CS50's reach and impact. Planning events, strategizing campaigns, and ensuring effective communication with stakeholders."
              index={0}
            />
            <ExperienceCard
              title="Nepal Astronomical Society (NASO)"
              role="Undergraduate Student Member"
              period="Oct 2023 - Present"
              description="Served as Country Guide and Tech Lead for IOAA-Jr. 2024, developing a QR-based system for participant tracking. Contributing to astronomical outreach and space science education initiatives."
              index={1}
            />
            <ExperienceCard
              title="Astronomy and Space Science Study Research Committee"
              role="Member"
              period="Jun 2023 - Present"
              description="Collaborating with local government in Biratnagar to promote astronomy and space science through outreach, technical workshops, and events. Enhancing technical education and contributing to regional plans and policies."
              index={2}
            />
            <ExperienceCard
              title="Municipal Child Club Network, Biratnagar"
              role="Secretary"
              period="Jul 2019 - Mar 2021"
              description="Coordinated initiatives for children's engagement and development. Managed organizational and communication aspects of community programs. Later served as an Advisor, supporting and guiding community initiatives."
              index={3}
            />
          </TabsContent>
          <TabsContent value="education" className="space-y-4 pt-4">
            <EducationCard
              title="Tribhuwan University, Institute of Engineering, Purwanchal Campus"
              degree="Bachelor of Engineering in Electronics, Communication, and Information Engineering"
              period="2023 - Present"
              description="Focusing on robotics, space technology, and software development."
              index={0}
            />
            <EducationCard
              title="SOS Hermann Gmeiner Secondary School"
              degree="High School - Physics, Chemistry, Mathematics, Biology, English"
              period="2020 - 2022"
              description="Served as Head-boy (batch: 2078 BS). Participated in STEM and various voluntary activities. Contributed to the provisional discovery of main belt asteroid '2020 WX9'."
              index={1}
            />
            <EducationCard
              title="Shree Pokhariya Secondary School"
              degree="Secondary Level - Science, Mathematics, English, Computer Science"
              period="2018 - 2020"
              description="Built a strong foundation in science and technology subjects."
              index={2}
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 space-y-8">
        <SectionHeading
          title="Get In Touch"
          description="Have a question or want to work together? Feel free to contact me."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors">suwarnapyakurel5@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors">9840036060</span>
              </div>
              <div className="flex items-center gap-3 group">
                <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors">Biratnagar, Koshi Province, Nepal</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/suwarna-wave" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="GitHub"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/suwarnapyakurel/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="LinkedIn"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              © 2025 Suwarna Pyakurel. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/suwarna-wave" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub" className="hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/suwarnapyakurel/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

