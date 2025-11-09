import { Bell, MenuIcon, SearchIcon, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarWithSearchBar() {
  return (
    <nav className="bg-black border-b text-gray-200 border-gray-700 px-6 md:px-10 py-2.5 flex items-center justify-between">
      {/* --- Left Section --- */}
      <div className="flex flex-row items-center gap-3">
        {/* Ícono de menú solo visible en mobile */}
        <Link href="/" className="md:hidden">
          <MenuIcon />
        </Link>

        {/* Logo */}
        <Image
          src="/logo-mt.png"
          alt="Logo"
          width={62}
          height={45}
          className="object-contain"
        />
      </div>

      {/* --- Center Links (solo desktop) --- */}
      <div className="hidden md:flex gap-8 text-lg font-medium">
        <Link href="/" className="hover:text-violet-400 transition-colors">
          Inicio
        </Link>
        <Link href="/movies" className="hover:text-violet-400 transition-colors">
          Películas
        </Link>
        <Link href="/series" className="hover:text-violet-400 transition-colors">
          Series
        </Link>
        <Link href="/contact" className="hover:text-violet-400 transition-colors">
          Contacto
        </Link>
      </div>

      {/* --- Right Section --- */}
      <div className="flex flex-row items-center gap-3">
        {/* Ícono de búsqueda (solo mobile) */}
        <Link href="/" className="md:hidden">
          <SearchIcon size={28} strokeWidth={2.5} />
        </Link>

        {/* Barra de búsqueda (solo desktop) */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-violet-500">
          <SearchIcon size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none w-full"
          />
        </div>

        {/* Ícono de notificación */}
        <Link href="/">
          <Bell size={28} strokeWidth={2.5} className="hover:text-violet-400 transition-colors" />
        </Link>

        {/* Ícono de usuario */}
        <div className="bg-gray-500 text-black rounded-full w-10 h-10 flex items-center justify-center">
          <UserRound size={22} />
        </div>
      </div>
    </nav>
  );
}
