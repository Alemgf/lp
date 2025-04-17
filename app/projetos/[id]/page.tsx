"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Simulando dados de projetos
const getProjectData = (id: string) => {
  const projects = {
    "zvs-cloth": {
      id: "zvs-cloth",
      title: "ZVS Cloth",
      category: "Moda",
      period: "2014-2019",
      client: "Marca Própria",
      color: "bg-[#e63946]",
      description:
        "ZVS foi meu primeiro empreendimento. Comecei muito novo no início do ensino médio e me serviu como uma grande escola, pois levava muito a sério a construção da marca. Eu já tinha algum conhecimento de Design, Fotografia e Edição porém na marca foi onde eu pude testar de fato minhas habilidades e colocar a prova no mercado.",
      overview:
        "Desenvolvimento completo de uma marca de roupas com foco em streetwear, desde a concepção da identidade visual até a produção e comercialização das peças.",
      challenge:
        "Criar uma marca autêntica e competitiva no mercado de moda, com recursos limitados e em um mercado altamente concorrido.",
      solution:
        "Utilizei meus conhecimentos em design e fotografia para criar uma identidade visual forte e consistente. Desenvolvi coleções com design minimalista e foco na qualidade das peças, criando um posicionamento diferenciado no mercado.",
      results: [
        "Reconhecimento da marca no mercado local",
        "Desenvolvimento de 5 coleções completas",
        "Crescimento constante nas vendas",
        "Estabelecimento de uma comunidade fiel de clientes",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "help-bar-eventos",
    },
    "help-bar-eventos": {
      id: "help-bar-eventos",
      title: "Help Bar Eventos",
      category: "Marketing",
      period: "2018-2020",
      client: "Help Bar",
      color: "bg-[#457b9d]",
      description:
        "Durante o ano de 2018 a 2020 morei em São Paulo cursando a faculdade e trabalhando de barman na empresa Help Bar que me trouxe muita experiência como funcionário, construindo comunidade, organização e respeito. Trabalhei em Grandes eventos corporativos de marcas como Banco Daycoval e Ferrari.",
      overview:
        "Participação na organização e execução de eventos corporativos para grandes marcas, com foco na experiência do cliente e na qualidade do serviço.",
      challenge:
        "Garantir a excelência no atendimento e na execução de eventos de alto padrão para clientes exigentes, em um ambiente de alta pressão.",
      solution:
        "Desenvolvimento de processos eficientes de organização e atendimento, com foco na personalização da experiência para cada cliente e na atenção aos detalhes.",
      results: [
        "Eventos bem-sucedidos para marcas como Banco Daycoval e Ferrari",
        "Reconhecimento pela qualidade do serviço",
        "Desenvolvimento de habilidades em gestão de eventos e atendimento ao cliente",
        "Crescimento profissional e networking",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "dmc-social",
    },
    "dmc-social": {
      id: "dmc-social",
      title: "DMC Social Media",
      category: "Marketing",
      period: "2016-2017",
      client: "DMC",
      color: "bg-[#2a9d8f]",
      description:
        "Trabalhava com Criação de: Outdoors, banners, logo marcas, cartões de visita, post para redes sociais, vídeos e tratamento de fotos. Gerenciava as redes sociais de algumas marcas alimentando com conteúdos e fazia um Estudo de Cada marca para me ajudar na criação de campanhas para captação.",
      overview:
        "Gestão completa de redes sociais e criação de conteúdo para diversas marcas, com foco em engajamento e conversão.",
      challenge:
        "Desenvolver estratégias de conteúdo eficientes para diferentes nichos de mercado, mantendo a identidade de cada marca e gerando resultados mensuráveis.",
      solution:
        "Criação de um processo de estudo aprofundado de cada marca, desenvolvimento de personas e calendários editoriais personalizados, com foco em conteúdo relevante e de alta qualidade.",
      results: [
        "Aumento significativo no engajamento das redes sociais",
        "Crescimento no número de seguidores",
        "Melhoria na percepção das marcas",
        "Aumento nas conversões através das redes sociais",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "chance-app",
    },
    "chance-app": {
      id: "chance-app",
      title: "Chance Supply",
      category: "Moda",
      period: "2019-2021",
      client: "Marca Própria",
      color: "bg-[#f4a261]",
      description:
        "Chance foi o meu segundo empreendimento. Abri a marca mais maduro no Design e com o intuito de aplicar todo meu conhecimento de MKT para impulsionar o negócio. Tive grandes resultados com vendas online e presença em 5 lojas físicas da grande vitória.",
      overview:
        "Desenvolvimento completo de uma marca de moda streetwear, desde a concepção da identidade visual até a produção, marketing e comercialização das peças em lojas físicas e online.",
      challenge:
        "Criar uma marca de moda que se destacasse em um mercado competitivo, aplicando conhecimentos de design e marketing para impulsionar o crescimento e alcançar reconhecimento.",
      solution:
        "Desenvolvimento de uma identidade visual forte e contemporânea, com foco em design de qualidade e estratégias de marketing digital e físico. Criação de coleções exclusivas e direção criativa de editoriais de moda para fortalecer o posicionamento da marca.",
      results: [
        "Presença em 5 lojas físicas na grande Vitória",
        "Forte presença online com vendas expressivas",
        "Peças usadas por pessoas famosas",
        "Artigos escritos em blogs conhecidos sobre a marca",
        "Reconhecimento no mercado de moda streetwear",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "slabware-dashboard",
    },
    "slabware-dashboard": {
      id: "slabware-dashboard",
      title: "SlabWare Dashboard",
      category: "Produto",
      period: "2021-Hoje",
      client: "SlabWare",
      color: "bg-[#2b2d42]",
      description:
        "Desenvolvimento de uma interface de dashboard para monitoramento de métricas em tempo real, com foco em usabilidade e visualização de dados.",
      overview:
        "Criação de uma solução completa de visualização de dados para empresas, permitindo o monitoramento em tempo real de métricas importantes para o negócio.",
      challenge:
        "Desenvolver uma interface que apresentasse dados complexos de forma clara e intuitiva, permitindo tomadas de decisão rápidas e eficientes.",
      solution:
        "Design de uma interface minimalista e funcional, com foco na hierarquia visual e na apresentação clara dos dados. Implementação de gráficos interativos e filtros avançados para facilitar a análise.",
      results: [
        "Adoção da ferramenta por diversas empresas",
        "Redução no tempo de análise de dados",
        "Melhoria na tomada de decisões baseadas em dados",
        "Feedback positivo sobre a usabilidade da interface",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "eco-brand",
    },
    "eco-brand": {
      id: "eco-brand",
      title: "Eco Brand",
      category: "Branding",
      period: "2020-2021",
      client: "Eco Products",
      color: "bg-[#606c38]",
      description:
        "Desenvolvimento completo de identidade visual para empresa de produtos sustentáveis, com foco em comunicar valores de sustentabilidade e responsabilidade ambiental.",
      overview:
        "Criação de uma marca autêntica e alinhada com valores de sustentabilidade, incluindo logo, paleta de cores, tipografia e aplicações.",
      challenge:
        "Desenvolver uma identidade visual que comunicasse efetivamente os valores de sustentabilidade da empresa, evitando clichês e se destacando em um mercado crescente.",
      solution:
        "Criação de uma identidade visual minimalista e orgânica, com uso de elementos naturais estilizados e uma paleta de cores terrosas. Desenvolvimento de um manual de marca completo e aplicações em diversos materiais.",
      results: [
        "Identidade visual reconhecida e valorizada pelo público-alvo",
        "Alinhamento perfeito com os valores da empresa",
        "Diferenciação no mercado de produtos sustentáveis",
        "Aplicação consistente em todos os pontos de contato com o cliente",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "zvs-cloth",
    },
  }

  return projects[id as keyof typeof projects]
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando carregamento de dados
    setTimeout(() => {
      setProject(getProjectData(params.id))
      setLoading(false)
    }, 500)
  }, [params.id])

  if (loading) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center min-h-screen">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-muted rounded mb-4"></div>
          <div className="h-12 w-64 bg-muted rounded mb-8"></div>
          <div className="h-64 w-full max-w-3xl bg-muted rounded"></div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
          <p className="text-muted-foreground mb-8">O projeto que você está procurando não existe ou foi removido.</p>
          <Link
            href="/projetos"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para Projetos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link
            href="/projetos"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Projetos
          </Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className={`w-16 h-16 ${project.color} rounded-full flex items-center justify-center`}>
              <span className="text-2xl font-bold text-white">{project.period.slice(2, 4)}</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">{project.category}</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">{project.period}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl mb-8">{project.description}</p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
                  <p>{project.overview}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Desafio</h2>
                  <p>{project.challenge}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Solução</h2>
                  <p>{project.solution}</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">Resultados</h2>
              <ul className="space-y-4">
                {project.results.map((result: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`w-6 h-6 ${project.color} rounded-full flex items-center justify-center flex-shrink-0 mr-3`}
                    >
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-muted">
                <h3 className="text-lg font-bold mb-4">Informações do Projeto</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cliente:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Período:</span>
                    <span className="font-medium">{project.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Galeria do Projeto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {project.gallery.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - imagem ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link
              href={`/projetos/${project.nextProject}`}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
            >
              Próximo Projeto <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/projetos"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full inline-flex items-center font-medium hover:bg-secondary/70 transition-colors border border-primary/30"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
