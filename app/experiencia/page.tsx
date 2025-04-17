"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ExperienciaPage() {
  const experiences = [
    {
      company: "ZVS Cloth",
      role: "CEO & Diretor Criativo",
      period: "2014-2019",
      location: "Vila Velha - ES",
      description:
        "ZVS foi meu primeiro empreendimento. Comecei muito novo no início do ensino médio e me serviu como uma grande escola, pois levava muito a sério a construção da marca. Eu já tinha algum conhecimento de Design, Fotografia e Edição porém na marca foi onde eu pude testar de fato minhas habilidades e colocar a prova no mercado.",
      responsibilities: [
        "Desenvolvimento e confecção de coleções",
        "Direção nos editoriais de moda",
        "Design de estampas",
        "Design Gráfico",
        "Editor de Vídeo",
        "Compra de matéria prima",
        "Social manager",
      ],
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
      ],
      color: "bg-[#e63946]",
      projectLink: "/projetos/zvs-cloth",
    },
    {
      company: "Help Bar",
      role: "Barman & Eventos",
      period: "2018-2020",
      location: "São Paulo - SP",
      description:
        "Durante o ano de 2018 a 2020 morei em São Paulo cursando a faculdade e trabalhando de barman na empresa Help Bar que me trouxe muita experiência como funcionário, construindo comunidade, organização e respeito. Trabalhei em Grandes eventos corporativos de marcas como Banco Daycoval e Ferrari. Toda essa experiência me gerou muito interesse na área criativa, no desenvolvimento de Produto, campanhas publicitárias, eventos e editoriais sempre em busca de aprendizado e oportunidades.",
      responsibilities: [],
      images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
      color: "bg-[#457b9d]",
      projectLink: "/projetos/help-bar-eventos",
    },
    {
      company: "DMC",
      role: "Design Gráfico & Social Media",
      period: "2016-2017",
      location: "Vila Velha - ES",
      description:
        "Trabalhava com Criação de: Outdoors, banners, logo marcas, cartões de visita, post para redes sociais, vídeos e tratamento de fotos.",
      responsibilities: [
        "Gerenciava as redes sociais de algumas marcas alimentando com conteúdos",
        "Fazia um Estudo de Cada marca para me ajudar na criação de campanhas para captação",
      ],
      images: ["/placeholder.svg?height=300&width=300"],
      color: "bg-[#2a9d8f]",
      projectLink: "/projetos/dmc-social",
    },
    {
      company: "Chance Supply",
      role: "CEO & Diretor Criativo",
      period: "2019-2021",
      location: "Vila Velha - ES",
      description:
        "Chance foi o meu segundo empreendimento. Abri a marca mais maduro no Design e com o intuito de aplicar todo meu conhecimento de MKT para impulsionar o negócio. Tive grandes resultados. Vendas online estávamos em 5 lojas físicas da grande vitória, alguns famosos usaram nossas peças e tivemos artigos escritos em Blogs conhecidos no meio sobre a marca.",
      responsibilities: [
        "Desenvolvimento e confecção de coleções",
        "Direção nos editoriais de moda",
        "Design de estampas",
        "Design Gráfico",
        "Editor de Vídeo",
        "Social manager",
      ],
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
      ],
      color: "bg-[#f4a261]",
      projectLink: "/projetos/chance-supply",
    },
    {
      company: "SlabWare",
      role: "Gerente de Marketing",
      period: "2021 - Hoje",
      location: "São Paulo - SP",
      description:
        "Entrei na empresa em janeiro de 2021 como Social manager. SlabWare foi e está sendo uma porta de entrada pra algo que eu já me interessava muito, softwares. Olhar na prática o desenvolvimento de uma aplicação me despertou uma curiosidade incrível pela área de tecnologia, e principalmente no mix entre MKT e Desenvolvimento de produto. Atuei em todos os aspectos, desde a criação de legendas, Edição de Vídeo, Re-design de aplicações, Web Design, Programando HTML, Email Marketing, criação de estratégias, funis e automações de MKT à criação de relatórios pra mensurar nosso LTV entre outras coisas. Conforme obtive resultado com os projetos que fiz logo que entrei na empresa, ganhei espaço para gerenciar e executar projetos importantes.",
      responsibilities: [
        "Gerenciamento de equipe de marketing",
        "Coordenação de projetos com o time de UX-UI",
        "Desenvolvimento de estratégias de marketing",
        "Redesign de aplicações e websites",
        "Criação de relatórios e métricas",
      ],
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
      ],
      color: "bg-[#2b2d42]",
      projectLink: "/projetos/slabware",
    },
  ]

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Experiência Profissional</h1>
          <p className="text-xl text-muted-foreground">
            Minha trajetória profissional em empresas e projetos que moldaram minha carreira e habilidades.
          </p>
        </motion.div>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className={`w-16 h-16 ${exp.color} rounded-full mb-6 flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{exp.period.slice(2, 4)}</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">{exp.company}</h2>
                <div className="flex items-center mb-4">
                  <p className="text-primary font-medium">{exp.role}</p>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <p className="text-muted-foreground">{exp.period}</p>
                </div>
                <p className="text-muted-foreground mb-6">{exp.location}</p>
                <p className="text-foreground mb-8">{exp.description}</p>

                {exp.responsibilities.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Responsabilidades</h3>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  href={exp.projectLink}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Ver projetos relacionados <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                {exp.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {exp.images.map((img, i) => (
                      <div
                        key={i}
                        className={`relative rounded-lg overflow-hidden ${
                          i === 0 ? "col-span-2 aspect-video" : "aspect-square"
                        }`}
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${exp.company} - imagem ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
