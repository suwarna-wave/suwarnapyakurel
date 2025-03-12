"use client"

import { Brain, Code, Rocket, BotIcon as Robot, GitBranchIcon, Terminal, Calendar } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  icon: "Robot" | "Code" | "Rocket" | "Brain" | "GitBranch" | "Terminal" | "Calendar"
  description: string
  index?: number
}

export function SkillCard({ title, icon, description, index = 0 }: SkillCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Robot":
        return <Robot className="h-10 w-10 text-primary" />
      case "Code":
        return <Code className="h-10 w-10 text-primary" />
      case "Rocket":
        return <Rocket className="h-10 w-10 text-primary" />
      case "Brain":
        return <Brain className="h-10 w-10 text-primary" />
      case "GitBranch":
        return <GitBranchIcon className="h-10 w-10 text-primary" />
      case "Terminal":
        return <Terminal className="h-10 w-10 text-primary" />
      case "Calendar":
        return <Calendar className="h-10 w-10 text-primary" />
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border-border/40 bg-background/50 backdrop-blur hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
        <CardHeader className="pb-2">
          <div className="mb-2 transform transition-transform duration-300 group-hover:scale-110">
            <IconComponent />
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

