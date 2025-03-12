"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"

interface MobileNavProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollToSection } = useScroll()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }

  const handleClick = (href: string) => {
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-2xl font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

