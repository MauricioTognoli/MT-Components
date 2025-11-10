"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { useThemeLang } from "@/context/ThemeLangContext";

export default function AboutPage() {
  const { language } = useThemeLang();
  const t = siteContent[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
   
      {/* About Me Section */}
      <section className="py-20 h-screen px-4 flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {language === "es" ? "Quién soy" : "Who I Am"}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            {language === "es"
              ? "Soy un desarrollador fullstack con foco en frontend. Me encanta transformar ideas en interfaces intuitivas y modernas, manteniendo siempre la usabilidad y el diseño limpio como prioridad."
              : "I am a fullstack developer with a focus on frontend. I love turning ideas into intuitive and modern interfaces, always prioritizing usability and clean design."}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            {language === "es"
              ? "Mi experiencia incluye proyectos personales y profesionales donde he trabajado con React, Next.js, Tailwind CSS y GraphQL, siempre aprendiendo nuevas herramientas para mejorar la experiencia del usuario."
              : "My experience includes personal and professional projects where I worked with React, Next.js, Tailwind CSS, and GraphQL, always learning new tools to enhance user experience."}
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Link
              href="mailto:tognolimauricio@gmail.com"
              className="inline-flex items-center px-5 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/80 transition-all shadow-md"
            >
              <Mail className="mr-2 h-5 w-5" /> {language === "es" ? "Contacto" : "Contact"}
            </Link>
            <Link
              href="https://github.com/MauricioTognoli"
              target="_blank"
              className="inline-flex items-center px-5 py-3 border border-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
            >
              <Github className="mr-2 h-5 w-5" /> Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/mauricio-tognoli"
              target="_blank"
              className="inline-flex items-center px-5 py-3 border border-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
            >
              <Linkedin className="mr-2 h-5 w-5" /> Linkedin
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/logo-mt.png"
            alt="Logo Mauricio Tognoli"
            width={400}
            height={400}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-neutral-100 dark:bg-neutral-800 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          {language === "es" ? "Habilidades" : "Skills"}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"].map(
            (skill) => (
              <span
                key={skill}
                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm sm:text-base shadow-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          {language === "es" ? "Experiencia" : "Experience"}
        </h2>
        <div className="flex flex-col gap-8">
          <div className="p-6 border border-border rounded-xl bg-card/50 backdrop-blur hover:scale-[1.02] transition-all">
            <h3 className="font-semibold text-xl mb-2">Frontend Developer - Freelance</h3>
            <p className="text-muted-foreground mb-1">2022 - Actualidad</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === "es"
                ? "He trabajado en diversos proyectos frontend usando React, Next.js y Tailwind CSS, creando componentes reutilizables y optimizando la experiencia del usuario."
                : "I have worked on various frontend projects using React, Next.js, and Tailwind CSS, creating reusable components and optimizing user experience."}
            </p>
          </div>
          <div className="p-6 border border-border rounded-xl bg-card/50 backdrop-blur hover:scale-[1.02] transition-all">
            <h3 className="font-semibold text-xl mb-2">Proyectos Personales</h3>
            <p className="text-muted-foreground mb-1">2021 - Actualidad</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === "es"
                ? "Desarrollé mi propio portfolio y varios componentes reutilizables, practicando buenas prácticas de código y diseño UI/UX."
                : "I developed my own portfolio and several reusable components, practicing coding best practices and UI/UX design."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">
          {language === "es"
            ? "¿Quieres colaborar o hablar de un proyecto?"
            : "Want to collaborate or discuss a project?"}
        </h3>
        <Link href="mailto:tognolimauricio@gmail.com">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-md hover:bg-primary/80 transition-all">
            {language === "es" ? "Enviar mensaje" : "Send a Message"}
          </button>
        </Link>
      </section>
    </div>
  );
}
