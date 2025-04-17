"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function SlabWarePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const slabwareProjects = [
    {
      id: "website",
      title: "SlabWare Website",
      description:
        "Redesign completo do site da empresa, com foco em melhorar a comunicação com leads e aumentar conversões.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projetos/slabware-website",
    },
    {
      id: "job-tracker",
      title: "Job Tracker",
      description:
        "Refatoração da feature Job Tracker, otimizando o fluxo de trabalho e melhorando a experiência do usuário.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projetos/slabware-job-tracker",
    },
    {
      id: "dashboard",
      title: "SlabWare Dashboard",
      description:
        "Interface de dashboard para monitoramento de métricas em tempo real, com foco em usabilidade e visualização de dados.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projetos/slabware-dashboard",
    },
    {
      id: "mailing",
      title: "SlabWare Mailing",
      description:
        "API de Mailing para personalização e automação de emails, com interface intuitiva para edição e organização.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projetos/slabware-mailing",
    },
    {
      id: "comments",
      title: "SlabWare Comments",
      description:
        "Sistema de comentários hierárquico que circula por vários lugares no sistema, melhorando a comunicação interna.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projetos/slabware-comments",
    },
    {
      id: "marketing",
      title: "SlabWare Marketing",
      description: "Estratégia omnichannel completa, abrangendo diversos canais e pontos de contato com o cliente.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projetos/slabware-marketing",
    },
  ]

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
            <div className="w-16 h-16 bg-[#2b2d42] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">21</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">SlabWare</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">Tecnologia</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">2021-Hoje</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="bg-muted p-6 rounded-xl mb-8">
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTab === "overview"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/70 text-secondary-foreground"
                    }`}
                  >
                    Visão Geral
                  </button>
                  <button
                    onClick={() => setActiveTab("role")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTab === "role"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/70 text-secondary-foreground"
                    }`}
                  >
                    Meu Papel
                  </button>
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTab === "projects"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/70 text-secondary-foreground"
                    }`}
                  >
                    Projetos
                  </button>
                </div>

                {activeTab === "overview" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Sobre a SlabWare</h2>
                    <p className="mb-4">
                      SlabWare é uma empresa de tecnologia especializada em soluções de software para o setor de pedras
                      e rochas. A empresa desenvolve aplicações que ajudam empresas deste segmento a gerenciar seu
                      inventário, processos de produção e vendas de forma eficiente.
                    </p>
                    <p>
                      Com foco em usabilidade e eficiência, os produtos da SlabWare são projetados para simplificar
                      operações complexas e fornecer insights valiosos para tomada de decisões no setor de pedras
                      ornamentais.
                    </p>
                  </div>
                )}

                {activeTab === "role" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Meu Papel na SlabWare</h2>
                    <p className="mb-4">
                      Entrei na empresa em janeiro de 2021 como Social manager. SlabWare foi e está sendo uma porta de
                      entrada pra algo que eu já me interessava muito, softwares. Olhar na prática o desenvolvimento de
                      uma aplicação me despertou uma curiosidade incrível pela área de tecnologia, e principalmente no
                      mix entre MKT e Desenvolvimento de produto.
                    </p>
                    <p className="mb-4">
                      Atuei em todos os aspectos, desde a criação de legendas, Edição de Vídeo, Re-design de aplicações,
                      Web Design, Programando HTML, Email Marketing, criação de estratégias, funis e automações de MKT à
                      criação de relatórios pra mensurar nosso LTV entre outras coisas.
                    </p>
                    <p>
                      Conforme obtive resultado com os projetos que fiz logo que entrei na empresa, ganhei espaço para
                      gerenciar e executar projetos importantes. Atualmente sou gerente de MKT, lidero uma equipe
                      composta por 3 pessoas e coordeno alguns projetos junto com o time de UX-UI.
                    </p>
                  </div>
                )}

                {activeTab === "projects" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Principais Projetos</h2>
                    <p className="mb-6">
                      Durante minha trajetória na SlabWare, participei de diversos projetos importantes que contribuíram
                      significativamente para o crescimento da empresa. Abaixo estão os principais projetos que liderei
                      ou nos quais tive participação relevante.
                    </p>
                    <div className="space-y-4">
                      {slabwareProjects.map((project) => (
                        <div key={project.id} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <h3 className="font-bold">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="SlabWare Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Informações</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Empresa:</span>
                    <span className="font-medium">SlabWare</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cargo:</span>
                    <span className="font-medium">Gerente de Marketing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Período:</span>
                    <span className="font-medium">2021 - Hoje</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Localização:</span>
                    <span className="font-medium">São Paulo - SP</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Habilidades Desenvolvidas</h2>
                <div className="space-y-3">
                  {[
                    "Marketing Digital",
                    "Gestão de Equipe",
                    "UX/UI Design",
                    "Web Design",
                    "HTML/CSS",
                    "Email Marketing",
                    "Automação de Marketing",
                    "Análise de Dados",
                    "Gestão de Projetos",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Projetos na SlabWare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {slabwareProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={project.link} className="block">
                  <div className="project-card h-full bg-secondary rounded-xl overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="project-overlay">
                        <div className="w-12 h-12 bg-[#2b2d42] rounded-full mb-4"></div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
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
          </div>
        </motion.div>
      </div>
    </div>
  )
}
