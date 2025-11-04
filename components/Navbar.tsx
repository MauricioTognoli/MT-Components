"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Github, ChevronDown, Sun, Moon, Linkedin } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
  <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-3 items-center">
        {/* Izquierda: Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-mt.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <h1 className="text-xl font-semibold text-balance">
              Mauricio<span className="text-orange-400">Tognoli</span>{" "}
              components
            </h1>
            <p className="text-sm text-muted-foreground">
              Componentes desarrollados en React
            </p>
          </div>
        </div>

        {/* Centro: Links */}
        <div className="flex justify-center gap-4">
          <Link href="/">
            <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50">
              Home
            </button>
          </Link>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50">
                Components <ChevronDown className="h-4 w-4 pointer-events-none" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="bg-background rounded-md shadow-md p-2 mt-1 min-w-[150px] z-50 transition-all transition-duration-200"
                sideOffset={5}
              >
                <DropdownMenu.Item asChild>
                  <Link
                    href="/navbars"
                    className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Navbar
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <Link href="/about">
            <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50">
              About
            </button>
          </Link>
        </div>

        {/* Derecha: Botones */}
        <div className="flex justify-end items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            onClick={() =>
              window.open("https://github.com/mauriciotognoli", "_blank")
            }
          >
            <Github className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            onClick={() =>
              window.open("https://www.linkedin.com/in/mauricio-tognoli", "_blank")
            }
          >
            <Linkedin className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="p-2"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  </header>
);

};
