"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Monitor, Laptop, Tablet, Smartphone } from "lucide-react"

interface ComponentShowcaseProps {
  viewportSize: string
  theme: "light" | "dark" | "system"
  children?: React.ReactNode
  url?: string
  title?: string
  code?: string // 👈 opcional, por si querés pasar el código manualmente
}

export function ComponentShowcase({
  viewportSize,
  theme,
  children,
  url = "mauriciotognoli.dev/components",
  title,
  code,
}: ComponentShowcaseProps) {
  const [currentViewport, setCurrentViewport] = useState(viewportSize || "100%")
  const [showCode, setShowCode] = useState(false)

  const viewports = [
    { label: "Full", value: "100%", icon: <Monitor size={16} /> },
    { label: "Laptop", value: "1024px", icon: <Laptop size={16} /> },
    { label: "Tablet", value: "768px", icon: <Tablet size={16} /> },
    { label: "Mobile", value: "375px", icon: <Smartphone size={16} /> },
  ]

  return (
    <div className="space-y-8">
      {/* Title */}
      {title && (
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">{title}</h2>
          <div className="h-1 w-16 mx-auto bg-orange-400 rounded-full" />
        </div>
      )}

      {/* Showcase Card */}
      <Card className="p-1 bg-muted/30 mb-10">
        <div className="bg-background rounded-lg overflow-hidden relative">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b relative">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/60"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/60"></div>
            </div>

            <div className="flex-1 text-center">
              <div className="text-xs text-muted-foreground bg-background rounded px-3 py-1 inline-block">
                {url}
              </div>
            </div>

            {/* Desktop Controls */}
            <div className="hidden sm:flex items-center gap-3 absolute right-3 top-2 bottom-2 my-auto">
              <div className="flex items-center gap-1">
                {viewports.map((vp) => (
                  <Button
                    key={vp.value}
                    size="icon"
                    variant={currentViewport === vp.value ? "default" : "ghost"}
                    onClick={() => setCurrentViewport(vp.value)}
                    className="h-8 w-8"
                    title={vp.label}
                  >
                    {vp.icon}
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Label htmlFor="code-switch" className="text-xs font-medium">
                  Preview
                </Label>
                <Switch id="code-switch" checked={showCode} onCheckedChange={setShowCode} />
                <Label htmlFor="code-switch" className="text-xs font-medium">
                  Code
                </Label>
              </div>
            </div>

            {/* Mobile Switch */}
            <div className="flex sm:hidden items-center gap-2 absolute right-3 top-2 bottom-2 my-auto">
              <Label htmlFor="code-switch-mobile" className="text-xs font-medium">
                Code
              </Label>
              <Switch
                id="code-switch-mobile"
                checked={showCode}
                onCheckedChange={setShowCode}
              />
            </div>
          </div>

          {/* Content */}
          {!showCode ? (
            <div className="p-8 min-h-[400px] flex items-center justify-center relative">
              {/* En mobile solo se muestra versión Mobile */}
              <div
  className="transition-all duration-300 ease-in-out border rounded-lg overflow-hidden"
  style={{
    width: "100%",
    maxWidth: currentViewport, // 👈 acá usamos el estado dinámico
  }}
>
  {children}
</div>

            </div>
          ) : (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Usage Example</h4>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open("https://github.com/mauriciotognoli/components", "_blank")
                  }
                >
                  View on GitHub
                </Button>
              </div>

              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>
                  {code ??
                    `<ComponentShowcase viewportSize="100%" theme="light" title="${title}">
  ${children ? "<YourComponent />" : ""}
</ComponentShowcase>`}
                </code>
              </pre>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
