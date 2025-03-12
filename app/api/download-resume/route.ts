import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Replace this path with the actual path to your resume PDF
    const filePath = path.join(process.cwd(), "public", "resume.pdf")
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Suwarna_Pyakurel_Resume.pdf",
      },
    })
  } catch (error) {
    console.error("Resume download error:", error)
    return new NextResponse("Resume not found", { status: 404 })
  }
}

