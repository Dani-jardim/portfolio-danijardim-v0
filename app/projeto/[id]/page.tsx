"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

const projectsData = {
  "1": {
    title: "Melhorando a experiência de inscrições",
    subtitle: "Rails Girls SP",
    tags: ["Redesign", "UX Research", "Acessibilidade"],
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-30%20at%2011.08.21-35VxDflsHxp6fjL4wtr3tn2iuo6zqk.png",
    secondaryImage: "/placeholder.svg?height=300&width=400",
    description: `Este projeto focou em melhorar a experiência de inscrições para os eventos do Rails Girls SP, uma iniciativa que visa ensinar programação para mulheres.

O desafio principal era criar uma jornada mais fluida e acessível para as participantes, considerando diferentes níveis de familiaridade com tecnologia.

Através de pesquisa com usuárias, identificamos pontos de fricção no processo de inscrição e desenvolvemos soluções que resultaram em:

• Aumento de 40% na taxa de conclusão de inscrições
• Redução de 60% nas dúvidas enviadas por email
• Melhoria significativa na acessibilidade para pessoas com deficiência
• Interface mais intuitiva e amigável

O projeto envolveu pesquisa qualitativa, prototipagem, testes de usabilidade e implementação de melhorias baseadas em feedback real das usuárias.`,
  },
  "2": {
    title: "Mobile Banking App",
    subtitle: "Aplicativo Bancário",
    tags: ["Mobile Design", "Fintech", "Segurança"],
    mainImage: "/placeholder.svg?height=400&width=600",
    secondaryImage: "/placeholder.svg?height=300&width=400",
    description: `Design de aplicativo bancário mobile com foco em interface intuitiva, segura e acessível para todos os tipos de usuários.

O projeto envolveu a criação de uma experiência bancária digital completa, desde o onboarding até transações complexas.

Principais desafios abordados:

• Simplificação de processos complexos
• Garantia de segurança sem comprometer a usabilidade
• Acessibilidade para diferentes faixas etárias
• Design responsivo para diversos dispositivos

Resultados alcançados:

• Interface limpa e intuitiva
• Fluxos otimizados para tarefas frequentes
• Sistema de autenticação seguro e prático
• Conformidade com diretrizes de acessibilidade WCAG

O projeto incluiu pesquisa de mercado, análise de concorrentes, criação de personas, wireframes, protótipos interativos e testes com usuários reais.`,
  },
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="min-h-screen bg-white font-montserrat flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "#7E60BF" }}>
            Projeto não encontrado
          </h1>
          <Link href="/">
            <Button className="text-white font-medium font-montserrat" style={{ backgroundColor: "#7E60BF" }}>
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-[#7E60BF] hover:text-[#6B46C1] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium font-montserrat">Voltar</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-montserrat mb-4" style={{ color: "#7E60BF" }}>
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 font-montserrat mb-6">{project.subtitle}</p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium font-montserrat border-[#7E60BF] text-[#7E60BF] hover:bg-[#7E60BF] hover:text-white transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-12">
          <div className="relative w-full h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image src={project.mainImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              {project.description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 font-montserrat leading-relaxed mb-6"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Secondary Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.secondaryImage || "/placeholder.svg"}
                  alt={`${project.title} - Imagem secundária`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back to Projects Button */}
        <div className="text-center mt-12">
          <Link href="/#work">
            <Button className="text-white font-medium font-montserrat px-8 py-3" style={{ backgroundColor: "#7E60BF" }}>
              Ver outros projetos
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
