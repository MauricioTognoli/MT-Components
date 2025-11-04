"use client"

import { Button } from "@/components/ui/button"

interface ExampleNavbarsProps {
  selectedNavbar: string
}

export function ExampleNavbars({ selectedNavbar }: ExampleNavbarsProps) {
  switch (selectedNavbar) {
    case "navbar2":
      return <CenteredNavbar />
    case "navbar3":
      return <NavbarWithSearch />
    default:
      return <SimpleNavbar />
  }
}

// 🟠 Simple Navbar
function SimpleNavbar() {
  return (
    <nav className="flex items-center justify-between bg-[#0e0e11] px-6 py-4 rounded-lg border border-border/30">
      <div className="text-orange-400 font-bold text-lg">MT.</div>
      <ul className="flex items-center gap-6 text-sm text-muted-foreground">
        <li>Home</li>
        <li>Components</li>
        <li>Docs</li>
        <li>About</li>
      </ul>
      <Button className="bg-orange-400 hover:bg-orange-500 text-white text-sm px-4 py-2 rounded-lg">
        Get Started
      </Button>
    </nav>
  )
}

// 🟠 Centered Navbar
function CenteredNavbar() {
  return (
    <nav className="flex items-center justify-center bg-[#0e0e11] px-6 py-4 rounded-lg border border-border/30">
      <ul className="flex items-center gap-8 text-sm text-muted-foreground">
        <li>Home</li>
        <li>Projects</li>
        <li className="text-orange-400 font-medium">Components</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

// 🟠 Navbar with Search
function NavbarWithSearch() {
  return (
    <nav className="flex items-center justify-between bg-[#0e0e11] px-6 py-4 rounded-lg border border-border/30">
      <div className="text-orange-400 font-bold text-lg">MT.</div>
      <input
        type="text"
        placeholder="Search components..."
        className="bg-[#1a1a1a] text-sm text-muted-foreground px-4 py-2 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <Button className="bg-orange-400 hover:bg-orange-500 text-white text-sm px-4 py-2 rounded-lg">
        Sign In
      </Button>
    </nav>
  )
}
