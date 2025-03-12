"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  description: string
  index?: number
}

export function EducationCard({ institution, degree, period, description, index = 0 }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border-border/40 bg-background/50 backdrop-blur hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="group-hover:text-primary transition-colors">{institution}</CardTitle>
              <p className="text-primary font-medium">{degree}</p>
            </div>
            <Badge
              variant="outline"
              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              {period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

