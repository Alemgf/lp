"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const categories = ["Todos", "Branding", "Design", "Marketing", "Produto", "Moda", "Tecnologia"]

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const projects = [
    {
      id: "zvs-cloth",
      title: "ZVS Cloth",
      category: "Moda",
      tags: ["Branding", "Moda", "Direção Criativa"],
      description: "Marca de roupas com foco em streetwear e design minimalista.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#e63946]",
    },
    {
      id: "help-bar-eventos",
      title: "Help Bar Eventos",
      category: "Marketing",
      tags: ["Eventos", "Branding", "Estratégia"],
      description: "Estratégia e execução de eventos corporativos para grandes marcas.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#457b9d]",
    },
    {
      id: "dmc-social",
      title: "DMC Social Media",
      category: "Marketing",
      tags: ["Social Media", "Design", "Conteúdo"],
      description: "Gestão de redes sociais e criação de conteúdo para diversas marcas.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#2a9d8f]",
    },
    {
      id: "chance-supply",
      title: "Chance Supply",
      category: "Moda",
      tags: ["Branding", "Moda", "Direção Criativa"],
      description: "Marca de streetwear com presença online e em lojas físicas na grande Vitória.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#f4a261]",
    },
    {
      id: "slabware",
      title: "SlabWare",
      category: "Tecnologia",
      tags: ["Marketing", "UX/UI", "Gestão"],
      description: "Empresa de software para o setor de pedras, com foco em gestão de inventário e processos.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#2b2d42]",
    },
    {
      id: "slabware-website",
      title: "SlabWare Website",
      category: "Design",
      tags: ["Web Design", "UI/UX", "Marketing"],
      description: "Redesign do site da SlabWare para melhorar conversões e experiência do usuário.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#2b2d42]",
    },
    {
      id: "slabware-job-tracker",
      title: "SlabWare Job Tracker",
      category: "Produto",
      tags: ["UX/UI", "Produto", "Design"],
      description: "Refatoração da feature Job Tracker para otimizar o fluxo de trabalho.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#2b2d42]",
    },
    {
      id: "slabware-dashboard",
      title: "SlabWare Dashboard",
      category: "Produto",
      tags: ["UI/UX", "Web App", "Dashboard"],
      description: "Interface de dashboard para monitoramento de métricas em tempo real.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#2b2d42]",
    },
    {
      id: "slabware-mailing",
      title: "SlabWare Mailing",
      category: "Produto",
      tags: ["API", "UX/UI", "Email"],
      description: "API de Mailing para personalização e automação de emails.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#2b2d42]",
    },
    {
      id: "slabware-comments",
      title: "SlabWare Comments",
      category: "Produto",
      tags: ["UX/UI", "Comunicação", "Chat"],
      description: "Sistema de comentários hierárquico para melhorar a comunicação interna.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#2b2d42]",
    },
    {
      id: "slabware-marketing",
      title: "SlabWare Marketing",
      category: "Marketing",
      tags: ["Estratégia", "Gestão", "Omnichannel"],
      description: "Estratégia omnichannel completa para crescimento da empresa.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#2b2d42]",
    },
    {
      id: "eco-brand",
      title: "Eco Brand",
      category: "Branding",
      tags: ["Identidade Visual", "Sustentabilidade", "Design"],
      description: "Desenvolvimento de marca para empresa de produtos sustentáveis.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-[#606c38]",
    },
  ]

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory || project.tags.includes(activeCategory))

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meus Projetos</h1>
          <p className="text-xl text-muted-foreground">
            Uma seleção dos meus trabalhos mais relevantes em diferentes áreas de atuação.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/70 text-secondary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <Link href={`/projetos/${project.id}`} className="block">
                <div className="project-card h-full bg-secondary rounded-xl overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="project-overlay">
                      <div className={`w-12 h-12 ${project.color} rounded-full mb-4`}></div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-background/30 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <span className="text-sm text-muted-foreground px-3 py-1 bg-background/50 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-muted-foreground line-clamp-1">{project.description}</p>
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
