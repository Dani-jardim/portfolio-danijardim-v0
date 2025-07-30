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
            <div className="font-bold text-xl font-montserrat" style={{ color: "#7E60BF" }}>
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
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/dani-profile.png"
                alt="Dani Jardim - UX/UI Designer"
                fill
                className="rounded-full object-cover shadow-lg"
                style={{ border: "4px solid #E4B1F0" }}
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat mb-6" style={{ color: "#7E60BF" }}>
            UX/UI Designer
          </h1>

          <p className="text-xl sm:text-2xl mb-4 font-montserrat font-medium" style={{ color: "#999999" }}>
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
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-center mb-8" style={{ color: "#7E60BF" }}>
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
                    <p className="text-sm font-montserrat">{item.description}</p>
                  </div>
                </div>
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
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-center mb-12" style={{ color: "#7E60BF" }}>
            Curiosidades
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
                <h3 className="font-bold text-lg font-montserrat text-center" style={{ color: "#7E60BF" }}>
                  Minha Foto
                </h3>
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
                      Curiosidade
                    </h4>
                    <p className="text-sm font-montserrat" style={{ color: "#999999" }}>
                      Meu estilo musical é totalmente eclético – vai de lo-fi a rock clássico.
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
                      Curiosidade
                    </h4>
                    <p className="text-sm font-montserrat" style={{ color: "#999999" }}>
                      Já fui fotógrafa profissional e também desenvolvedora front-end.
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
                      Curiosidade
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
                  <p className="font-semibold text-white truncate font-montserrat">Bohemian Rhapsody</p>
                  <p className="text-sm text-white/80 truncate font-montserrat">Queen</p>
                  <p className="text-xs text-white/60 truncate font-montserrat">A Night at the Opera</p>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="flex items-center space-x-1 text-xs text-white/60">
                    <span>2:31</span>
                    <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-white rounded-full"></div>
                    </div>
                    <span>5:55</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Link
                href="https://open.spotify.com/user/22utpbpxnqqlfhwivesaw5ngq?si=9993c421387445b7"
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

            {/* Recent Tracks */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3 font-montserrat opacity-90">TOCADAS RECENTEMENTE</h4>
              <div className="space-y-2">
                {[
                  { track: "Lofi Hip Hop Mix", artist: "ChilledCow", time: "há 2h" },
                  { track: "Imagine", artist: "John Lennon", time: "há 5h" },
                  { track: "Bossa Nova Classics", artist: "Various Artists", time: "ontem" },
                ].map((song, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate font-montserrat">{song.track}</p>
                      <p className="text-xs text-white/70 truncate font-montserrat">{song.artist}</p>
                    </div>
                    <span className="text-xs text-white/60 font-montserrat">{song.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-lg font-montserrat font-medium" style={{ color: "#7E60BF" }}>
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
