"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Menu, X } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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
      title: "Melhorando a experiência de inscrições",
      description: "Melhorias no site do Rails Girls SP para uma jornada mais fluida e acessível",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-30%20at%2011.08.21-35VxDflsHxp6fjL4wtr3tn2iuo6zqk.png",
      url: "/projeto/1",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Design de aplicativo bancário mobile com interface intuitiva, segura e acessível",
      image: "/placeholder.svg?height=300&width=400",
      url: "/projeto/2",
    },
  ]

  const experiments = [
    {
      id: 1,
      title: "Micro-interactions Study",
      description: "Estudo de micro-interações para melhorar o engajamento e feedback visual do usuário",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Accessibility Testing",
      description: "Testes de acessibilidade e inclusão em interfaces digitais para todos os usuários",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-montserrat font-medium" style={{ color: "#7E60BF" }}>
              [Dani Jardim]
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
                  className={`text-sm font-medium font-montserrat transition-colors hover:text-[#7E60BF] ${
                    activeSection === item.id ? "text-[#7E60BF]" : "text-[#999999]"
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
                  className={`block w-full text-left py-2 text-sm font-medium font-montserrat transition-colors hover:text-[#7E60BF] ${
                    activeSection === item.id ? "text-[#7E60BF]" : "text-[#999999]"
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
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat mb-6 flex items-center justify-center gap-6"
            style={{ color: "#7E60BF" }}
          >
            <span className="text-4xl">UX/UI</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative w-32 h-32 cursor-pointer animate-bounce-gentle hover:animate-none">
                    <Image
                      src="/dani-profile.png"
                      alt="Dani Jardim - UX/UI Designer"
                      fill
                      className="rounded-full object-cover shadow-lg"
                      style={{ border: "4px solid #E4B1F0" }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Olá! Boas Vindas</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="text-4xl">Designer</span>
          </h1>

          <p
            className="text-xl mb-4 font-montserrat tracking-normal leading-7 font-bold sm:text-4xl"
            style={{ color: "#7E60BF" }}
          >
            Criação de experiências digitais
          </p>

          <p
            className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed font-montserrat"
            style={{ color: "#999999" }}
          >
            Olá! Eu sou a{" "}
            <span className="font-semibold font-montserrat" style={{ color: "#7E60BF" }}>
              Dani Jardim
            </span>
            ! Focada em UX Design e apaixonada por boas experiências.
          </p>

          <Button
            onClick={() => scrollToSection("work")}
            className="text-white font-medium font-montserrat px-8 py-3 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: "#7E60BF" }}
          >
            Ver meus projetos
          </Button>
        </div>
      </section>

      {/* Work Section - Combined Projects and Experiments */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold font-montserrat text-center mb-8 text-3xl" style={{ color: "#7E60BF" }}>
            Meus Trabalhos
          </h2>

          {/* Tab Menu */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-8 py-3 rounded-full font-medium font-montserrat transition-all duration-300 ${
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
                className={`px-8 py-3 rounded-full font-medium font-montserrat transition-all duration-300 ${
                  activeTab === "experiments" ? "text-white shadow-md" : "text-[#7E60BF] hover:bg-gray-50"
                }`}
                style={{
                  backgroundColor: activeTab === "experiments" ? "#7E60BF" : "transparent",
                }}
              >
                Experimentos AI
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
                {activeTab === "projects" && item.url ? (
                  <Link href={item.url} className="relative block">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-montserrat">{item.description}</p>
                    </div>
                  </Link>
                ) : (
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
                      <p className="text-sm font-montserrat">{item.description}</p>
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-montserrat mb-4" style={{ color: "#7E60BF" }}>
                    {item.title}
                  </h3>
                  {activeTab === "projects" && item.url && (
                    <Button
                      asChild
                      className="text-white font-medium font-montserrat"
                      style={{ backgroundColor: "#7E60BF" }}
                    >
                      <Link href={item.url}>Ver Projeto</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold font-montserrat text-center mb-12 text-3xl" style={{ color: "#7E60BF" }}>
            Sobre mim
          </h2>

          <p
            className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed font-montserrat text-center"
            style={{ color: "#666666" }}
          >
            Sou uma profissional multidisciplinar com mais de 10 anos de experiência em design gráfico e comunicação
            visual, além de vivências em fotografia e desenvolvimento front-end. Ao longo da minha trajetória, sempre
            estive em busca de unir criatividade, funcionalidade e empatia – e foi justamente isso que me trouxe de
            volta ao universo do UX Design.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Minha Foto */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg h-full flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src="/dani-profile.png"
                    alt="Dani Jardim"
                    fill
                    className="rounded-full object-cover shadow-md"
                    style={{ border: "3px solid #E4B1F0" }}
                  />
                </div>
                <h3 className="font-bold text-lg font-montserrat text-center mb-4" style={{ color: "#7E60BF" }}>
                  Dani Jardim
                </h3>
                <div className="flex justify-center space-x-3">
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all hover:scale-110"
                    style={{ backgroundColor: "#7E60BF" }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.behance.net/danijardim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all hover:scale-110"
                    style={{ backgroundColor: "#7E60BF" }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.25.24-1.89.24H0V4.51h6.938v-.007zM3.495 8.42h2.876c.606 0 1.1-.15 1.48-.45.38-.3.57-.74.57-1.32 0-.33-.06-.63-.18-.9-.12-.27-.3-.5-.54-.69-.24-.18-.54-.32-.88-.41-.34-.09-.72-.13-1.14-.13H3.495v3.9zm0 7.17h3.036c.44 0 .84-.05 1.2-.16.36-.11.67-.27.93-.48.26-.21.46-.48.59-.79.13-.31.2-.67.2-1.08 0-.8-.23-1.37-.68-1.72-.44-.35-1.07-.53-1.88-.53H3.495v4.77zM13.5 2.212c1.42 0 2.65.19 3.69.57 1.04.38 1.9.91 2.58 1.59.68.68 1.19 1.49 1.53 2.43.34.94.51 1.97.51 3.09 0 1.18-.17 2.23-.51 3.16-.34.93-.85 1.72-1.53 2.4-.68.68-1.54 1.2-2.58 1.58-1.04.38-2.27.57-3.69.57s-2.65-.19-3.69-.57c-1.04-.38-1.9-.9-2.58-1.58-.68-.68-1.19-1.47-1.53-2.4-.34-.93-.51-1.98-.51-3.16 0-1.12.17-2.15.51-3.09.34-.94.85-1.75 1.53-2.43.68-.68 1.54-1.21 2.58-1.59 1.04-.38 2.27-.57 3.69-.57zm0 2.09c-.85 0-1.58.13-2.2.4-.62.27-1.13.65-1.53 1.14-.4.49-.7 1.07-.9 1.74-.2.67-.3 1.4-.3 2.19s.1 1.52.3 2.19c.2.67.5 1.25.9 1.74.4.49.91.87 1.53 1.14.62.27 1.35.4 2.2.4.85 0 1.58-.13 2.2-.4.62-.27 1.13-.65 1.53-1.14.4-.49.7-1.07.9-1.74.2-.67.3-1.4.3-2.19s-.1-1.52-.3-2.19c-.2-.67-.5-1.25-.9-1.74-.4-.49-.91-.87-1.53-1.14-.62-.27-1.35-.4-2.2-.4z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/daniela-jardim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all hover:scale-110"
                    style={{ backgroundColor: "#7E60BF" }}
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </Link>
                  <Link
                    href="https://flickr.com/photos/27923951@N05/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all hover:scale-110"
                    style={{ backgroundColor: "#7E60BF" }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 12c0 2.5 2.02 4.53 4.53 4.53s4.53-2.03 4.53-4.53-2.02-4.53-4.53-4.53S0 9.5 0 12zm14.94 0c0 2.5 2.02 4.53 4.53 4.53S24 14.5 24 12s-2.02-4.53-4.53-4.53-4.53 2.03-4.53 4.53z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Curiosidades Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Curiosidade 1 */}
              <div className="bg-white rounded-lg p-6 shadow-lg" style={{ borderLeft: "4px solid #7E60BF" }}>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎧</span>
                  <div>
                    <h4 className="font-semibold text-lg font-montserrat mb-2" style={{ color: "#7E60BF" }}>
                      Música é vida
                    </h4>
                    <p className="text-sm font-montserrat" style={{ color: "#999999" }}>
                      Meu estilo musical é totalmente eclético – vai de Banda Uó a rock Metálica em um mesmo dia
                    </p>
                  </div>
                </div>
              </div>

              {/* Curiosidade 2 */}
              <div className="bg-white rounded-lg p-6 shadow-lg" style={{ borderLeft: "4px solid #7E60BF" }}>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📷</span>
                  <div>
                    <h4 className="font-semibold text-lg font-montserrat mb-2" style={{ color: "#7E60BF" }}>
                      Já fui fotógrafa
                    </h4>
                    <p className="text-sm font-montserrat" style={{ color: "#999999" }}>
                      Fui sócia de um estúdio por 3 anos e meio e já fotografei TUDO que imaginar
                    </p>
                  </div>
                </div>
              </div>

              {/* Curiosidade 3 */}
              <div
                className="md:col-span-2 bg-white rounded-lg p-6 shadow-lg"
                style={{ borderLeft: "4px solid #7E60BF" }}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-semibold text-lg font-montserrat mb-2" style={{ color: "#7E60BF" }}>
                      Artista nas horas vagas
                    </h4>
                    <p className="text-sm font-montserrat" style={{ color: "#999999" }}>
                      Sou aspirante a artista nas horas vagas – adoro pintar quadros e explorar a criatividade com
                      tintas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spotify Section */}
          <div className="bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-lg p-6 shadow-lg mb-12 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg font-montserrat">Spotify</h3>
                  <p className="text-xs opacity-90">Meu gosto musical eclético</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">TOCANDO AGORA</span>
              </div>
            </div>

            {/* Now Playing Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate font-montserrat">Ela Partiu</p>
                  <p className="text-sm text-white/80 truncate font-montserrat">Tim Maia</p>
                  <p className="text-xs text-white/60 truncate font-montserrat">Tim Maia</p>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="flex items-center space-x-1 text-xs text-white/60">
                    <span>1:45</span>
                    <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-white rounded-full"></div>
                    </div>
                    <span>3:28</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Link
                href="https://open.spotify.com/user/22utpbpxnqqlfhwivesaw5ngq?si=f8c48b2da0a44717"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg py-3 px-4 text-center font-medium font-montserrat transition-all hover:scale-105"
              >
                Ver Perfil
              </Link>
              <button className="flex-1 bg-white text-[#1DB954] hover:bg-gray-100 rounded-lg py-3 px-4 font-medium font-montserrat transition-all hover:scale-105">
                Seguir Playlist
              </button>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="font-montserrat font-semibold text-3xl" style={{ color: "#7E60BF" }}>
              Vamos nos conectar?
            </p>
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
          <p className="text-sm font-montserrat" style={{ color: "#999999" }}>
            © 2024 Dani Jardim. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
