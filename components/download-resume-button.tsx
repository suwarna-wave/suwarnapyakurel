"use client"

import { useState } from "react"
import { FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function DownloadResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Replace this URL with your actual resume PDF URL
      const response = await fetch("/api/download-resume")

      if (!response.ok) {
        throw new Error("Failed to download resume")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Suwarna_Pyakurel_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast({
        title: "Success!",
        description: "Resume downloaded successfully.",
      })
    } catch (error) {
      console.error("Download error:", error)
      toast({
        title: "Download Failed",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      className="group relative overflow-hidden"
      disabled={isDownloading}
    >
      <span className="absolute inset-0 bg-primary/10 group-hover:translate-y-full transition-transform duration-300"></span>
      {isDownloading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Downloading...
        </span>
      ) : (
        <span className="flex items-center gap-2 relative z-10">
          <FileDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          Download Resume
        </span>
      )}
    </Button>
  )
}

