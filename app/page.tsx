"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("projects")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "about"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "E-commerce Redesign",
      description: "Redesign completo de plataforma e-commerce com foco na experiência do usuário",
      image: "/placeholder.svg?height=300&width=400",
      url: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Design de aplicativo bancário mobile com interface intuitiva e segura",
      image: "/placeholder.svg?height=300&width=400",
      url: "#",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description: "Dashboard para plataforma SaaS com visualização de dados complexos",
      image: "/placeholder.svg?height=300&width=400",
      url: "#",
    },
    {
      id: 4,
      title: "Food Delivery App",
      description: "Aplicativo de delivery com foco na usabilidade e conversão",
      image: "/placeholder.svg?height=300&width=400",
      url: "#",
    },
  ]

  const experiments = [
    {
      id: 1,
      title: "Micro-interactions Study",
      description: "Estudo de micro-interações para melhorar o engajamento do usuário",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Color Psychology",
      description: "Experimento sobre o impacto das cores na experiência do usuário",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Typography Exploration",
      description: "Exploração tipográfica para interfaces digitais modernas",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Accessibility Testing",
      description: "Testes de acessibilidade e inclusão em interfaces digitais",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl" style={{ color: "#7E60BF" }}>
              Dani Jardim
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Início" },
                { id: "work", label: "Trabalhos" },
                { id: "about", label: "Sobre mim" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#7E60BF] ${
                    activeSection === item.id ? "text-[#7E60BF]" : "text-[#E2E1D9]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" style={{ color: "#7E60BF" }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: "#7E60BF" }} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {[
                { id: "home", label: "Início" },
                { id: "work", label: "Trabalhos" },
                { id: "about", label: "Sobre mim" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-[#7E60BF] ${
                    activeSection === item.id ? "text-[#7E60BF]" : "text-[#E2E1D9]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Dani Jardim - UX/UI Designer"
                fill
                className="rounded-full object-cover shadow-lg"
                style={{ border: "4px solid #E4B1F0" }}
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "#7E60BF" }}>
            UX/UI Designer
          </h1>

          <p className="text-xl sm:text-2xl mb-4" style={{ color: "#E2E1D9" }}>
            Criação de experiências digitais
          </p>

          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: "#E2E1D9" }}>
            Olá! Eu sou a{" "}
            <span className="font-semibold" style={{ color: "#7E60BF" }}>
              Dani Jardim
            </span>
            ! Focada em UX Design e apaixonada por boas experiências.
          </p>

          <Button
            onClick={() => scrollToSection("work")}
            className="text-white font-medium px-8 py-3 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: "#7E60BF" }}
          >
            Ver meus projetos
          </Button>
        </div>
      </section>

      {/* Work Section - Combined Projects and Experiments */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: "#7E60BF" }}>
            Meus Trabalhos
          </h2>

          {/* Tab Menu */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "projects" ? "text-white shadow-md" : "text-[#7E60BF] hover:bg-gray-50"
                }`}
                style={{
                  backgroundColor: activeTab === "projects" ? "#7E60BF" : "transparent",
                }}
              >
                Projetos
              </button>
              <button
                onClick={() => setActiveTab("experiments")}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "experiments" ? "text-white shadow-md" : "text-[#7E60BF] hover:bg-gray-50"
                }`}
                style={{
                  backgroundColor: activeTab === "experiments" ? "#7E60BF" : "transparent",
                }}
              >
                Experimentos
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(activeTab === "projects" ? projects : experiments).map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#7E60BF" }}>
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: "#7E60BF" }}>
            Sobre mim
          </h2>

          <p className="text-lg mb-12 leading-relaxed" style={{ color: "#E2E1D9" }}>
            Sou uma designer apaixonada por criar experiências digitais que conectam pessoas e resolvem problemas reais.
            Com foco em UX Design, trabalho para transformar ideias complexas em interfaces intuitivas e acessíveis,
            sempre priorizando as necessidades dos usuários.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#E4B1F0", color: "#7E60BF" }}>
              <h3 className="font-semibold text-lg mb-2">☕ Amo design e café</h3>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#E4B1F0", color: "#7E60BF" }}>
              <h3 className="font-semibold text-lg mb-2">📸 Já fui fotógrafa</h3>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#E4B1F0", color: "#7E60BF" }}>
              <h3 className="font-semibold text-lg mb-2">❤️ Adoro resolver problemas com empatia</h3>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://linkedin.com/in/danijardim"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: "#7E60BF" }}
            >
              <Linkedin className="h-6 w-6 text-white" />
            </Link>
            <Link
              href="mailto:danijardim@email.com"
              className="p-3 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: "#7E60BF" }}
            >
              <Mail className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm" style={{ color: "#E2E1D9" }}>
            © 2024 Dani Jardim. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
