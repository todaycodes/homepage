import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">
            DS Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition">About</a>
            <a href="#skills" className="text-gray-600 hover:text-primary transition">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-primary transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#about" className="text-gray-600 hover:text-primary transition">About</a>
            <a href="#skills" className="text-gray-600 hover:text-primary transition">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-primary transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition">Contact</a>
          </nav>
        )}
      </div>
    </header>
  )
}

import { useState } from 'react'
