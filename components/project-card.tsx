// Update the ProjectCard component to enhance the image display and hover effects:

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
}

export function ProjectCard({ title, description, tags, image, link, github }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimatedCard>
      <Card
        className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/40 bg-background/50 backdrop-blur project-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative aspect-video overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 project-image ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-center justify-center gap-4 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {link && (
              <Button size="sm" variant="secondary" asChild className="transform hover:scale-105 transition-transform">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </Link>
              </Button>
            )}
            {github && (
              <Button size="sm" variant="outline" asChild className="transform hover:scale-105 transition-transform">
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
        <CardContent className="p-4">
          <motion.h3
            className="text-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {description}
          </motion.p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Badge
                variant="secondary"
                className="transition-all hover:bg-primary hover:text-primary-foreground transform hover:scale-105"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </CardFooter>
      </Card>
    </AnimatedCard>
  )
}

