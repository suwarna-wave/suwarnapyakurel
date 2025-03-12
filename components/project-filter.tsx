"use client"
import { Button } from "@/components/ui/button"

interface ProjectFilterProps {
  categories: string[]
  onFilterChange: (category: string) => void
  activeFilter: string
}

export function ProjectFilter({ categories, onFilterChange, activeFilter }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant={activeFilter === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("all")}
        className="rounded-full"
      >
        All Projects
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

