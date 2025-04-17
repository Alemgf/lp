"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Templates", path: "/templates" },
  { name: "Sobre", path: "/sobre" },
  { name: "Contato", path: "/contato" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-syne font-bold">
            LANDING<span className="text-accent">.</span>Studio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className={`nav-link ${pathname === item.path ? "active" : ""}`}>
                {item.name}
              </Link>
            ))}
            <Link
              href="/templates"
              className="px-4 py-2 bg-accent/10 text-accent rounded-full flex items-center text-sm font-medium hover:bg-accent/20 transition-colors"
            >
              Ver Templates <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md z-40 flex flex-col"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.path}
                >
                  <Link
                    href={item.path}
                    className={`text-2xl font-syne font-bold ${
                      pathname === item.path ? "text-accent" : "text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link
                  href="/templates"
                  className="mt-6 px-6 py-3 bg-accent text-accent-foreground rounded-full inline-flex items-center text-lg font-medium hover:bg-accent/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Ver Templates <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
