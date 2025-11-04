"use client"

import { useState } from "react"
import { ComponentShowcase } from "@/components/component-showcase"
import { ExampleNavbars } from "@/components/Navbars/exampleNavbars"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function NavbarsPage() {
  const [viewportSize, setViewportSize] = useState("100%")
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark")
  const [selectedNavbar, setSelectedNavbar] = useState("navbar1")

  const navbars = [
    { id: "navbar1", name: "Simple Navbar", category: "Basic" },
    { id: "navbar2", name: "Centered Navbar", category: "Layout" },
    { id: "navbar3", name: "Navbar with Search", category: "Feature" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground ">
      <div className="container mx-auto space-y-10">
        {/* Header */}
        <div className="text-center  h-screen flex flex-col justify-center">
          <h1 className="text-8xl font-bold">Navbars</h1>
          <div className="h-2 w-60 mx-auto bg-orange-400 rounded-full mb-6 mt-3" />
          <p className="text-muted-foreground text-2xl max-w-2xl mx-auto">
            Explore different navbar styles built with React, Tailwind CSS, and shadcn/ui.
          </p>
        </div>

     

        {/* Component Showcase */}
        <ComponentShowcase viewportSize={viewportSize} title='Navbar 1'>
          <ExampleNavbars selectedNavbar={selectedNavbar} />
        </ComponentShowcase>
      </div>
    </div>
  )
}
