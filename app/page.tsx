"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Palette, Globe, Code2, Rocket, Cpu, Layers, Sparkles, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Theme = "light" | "dark" | "system"
type Language = "en" | "es" | "pt"

const translations = {
  es: {
    title: "Componentes de Mauricio Tognoli",
    subtitle: "Una colección curada de componentes React modernos",
    description:
      "Creando interfaces. Construyendo software pulido y experiencias web. Experimentando con detalles mágicos en interfaces de usuario.",
    aboutTitle: "Sobre mí",
    aboutText:
      "Soy un desarrollador frontend especializado en React, Next.js y Tailwind CSS. Me apasiona el diseño funcional y las interfaces limpias. Este proyecto es una demostración de mi enfoque en la calidad visual, la accesibilidad y la consistencia en el desarrollo de interfaces.",
    techStack: "Stack Tecnológico",
    featuredComponents: "Componentes Destacados",
    process: "Mi Proceso de Desarrollo",
    ctaTitle: "¿Querés colaborar o ver más proyectos?",
    ctaButton: "Contactame",
  },
  en: {
    title: "Mauricio Tognoli Components",
    subtitle: "A curated collection of modern React components",
    description:
      "Crafting interfaces. Building polished software and web experiences. Experimenting with magical details in user interfaces.",
    aboutTitle: "About Me",
    aboutText:
      "I’m a frontend developer specialized in React, Next.js, and Tailwind CSS. I’m passionate about clean, functional UI design. This project demonstrates my focus on visual quality, accessibility, and interface consistency.",
    techStack: "Tech Stack",
    featuredComponents: "Featured Components",
    process: "My Development Process",
    ctaTitle: "Want to collaborate or see more projects?",
    ctaButton: "Get in touch",
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("es")
  const t = translations[language]

  const technologies = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Radix UI"]

  const processSteps = [
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Diseño UI",
      text: "Empiezo con una visión clara del diseño, manteniendo equilibrio entre estética y usabilidad.",
    },
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      title: "Desarrollo",
      text: "Escribo código limpio y modular usando las mejores prácticas en React y TypeScript.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "Optimización",
      text: "Cuido el rendimiento y la accesibilidad en cada componente, priorizando la experiencia del usuario.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Entrega",
      text: "Creo experiencias que se ven y se sienten profesionales, con animaciones suaves y consistentes.",
    },
  ]

  const featuredComponents = [
    {
      title: "Navbar Moderna",
      image: "/navbar-preview.png",
      href: "/navbars",
      description: "Navegación adaptable con menús desplegables, íconos y cambio de tema.",
    },
    {
      title: "Dashboard Card",
      image: "/dashboard-preview.png",
      href: "#",
      description: "Diseños de tarjetas personalizables para dashboards y paneles de usuario.",
    },
    {
      title: "Botones UI",
      image: "/buttons-preview.png",
      href: "#",
      description: "Botones animados con diferentes variantes y estilos accesibles.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo-mt.png"
            alt="Mauricio Tognoli Logo"
            width={180}
            height={180}
            className="mx-auto mb-6"
          />
         <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              <span className="text-shadow-lg text-foreground">Mauricio</span>
              <span className="text-shadow-lg text-orange-400">Tognoli</span>
              <span className="text-foreground"> components.</span>
            </h2>
          <p className="text-xl text-muted-foreground mb-8">{t.description}</p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-orange-400/40 dark:bg-gray-800 h-screen flex items-center">
  <div className="container mx-auto max-w-4xl text-center">
    <h2 className="text-3xl font-bold mb-6">{t.aboutTitle}</h2>
    <p className="text-lg text-muted-foreground leading-relaxed mb-10">
      {t.aboutText}
    </p>

    {/* Botones de acción */}
    <div className="flex justify-center gap-4">
      <Link
        href="mailto:mauriciotognoli@gmail.com"
        className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
      >
        Contacto
      </Link>

      <Link
        href="https://mauriciotognoli.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg"
      >
        Ver Portfolio
      </Link>
    </div>
  </div>
</section>


      {/* Featured Components */}
      <section className="py-20 px-4 h-screen flex items-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center">{t.featuredComponents}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredComponents.map((component, index) => (
              <Card
                key={index}
                className="p-4 bg-card/50 backdrop-blur hover:scale-[1.02] transition-all"
              >
                <a href={component.href}>
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={component.image}
                      alt={component.title}
                      fill
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">{component.title}</h4>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-orange-400/40 dark:bg-gray-800 h-screen flex items-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-12 text-center">{t.process}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">{t.ctaTitle}</h3>
          <Button size="lg" className="rounded-xl">
            {t.ctaButton}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            © 2025 Mauricio Tognoli — Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/" target="_blank">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com/" target="_blank">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:mauriciotognoli@gmail.com">
              <Mail className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
