"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Zap, Layout, Users } from "lucide-react"

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeContent = marqueeRef.current
    if (!marqueeContent) return

    const clone = marqueeContent.cloneNode(true)
    marqueeRef.current?.parentElement?.appendChild(clone)
  }, [])

  const featuredTemplates = [
    {
      id: "agency-pro",
      title: "Agency Pro",
      category: "Agência de Marketing",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "fitness-coach",
      title: "Fitness Coach",
      category: "Saúde & Fitness",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "restaurant-menu",
      title: "Restaurant Menu",
      category: "Gastronomia",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "lawyer-services",
      title: "Lawyer Services",
      category: "Serviços Jurídicos",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
  ]

  // Variantes para animações com Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Formas orgânicas de fundo */}
        <div className="blob-shape w-[600px] h-[600px] top-[-100px] right-[-100px] opacity-50"></div>
        <div className="blob-shape-2 w-[500px] h-[500px] bottom-[-100px] left-[-100px] opacity-40"></div>
        <div className="blob-shape-3 w-[400px] h-[400px] top-[30%] left-[20%] opacity-30"></div>

        {/* Padrão de pontos */}
        <div className="dot-pattern"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 text-sm font-medium">
                Templates Profissionais
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Landing Pages <span className="gradient-text">Prontas</span> para seu Negócio                
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Templates profissionais e personalizáveis para impulsionar sua presença online. Escolha, personalize e
                lance seu site em tempo recorde.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/templates"
                  className="px-6 py-3 bg-accent text-accent-foreground rounded-full flex items-center font-medium hover:bg-accent/90 transition-all duration-300 hover:translate-x-1"
                >
                  Ver Templates <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/sobre"
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full flex items-center font-medium hover:bg-secondary/70 transition-colors border border-primary/10"
                >
                  Sobre o Studio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=450"
                    alt="Template Preview 1"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-12 shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=450"
                    alt="Template Preview 2"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-syne font-bold shadow-lg">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.7,
                  }}
                >
                  2024
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative overflow-hidden">
        <div className="blob-shape-3 w-[600px] h-[600px] top-[-100px] left-[-100px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-draw-line inline-block">
              Por que escolher nossos templates?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desenvolvidos por especialistas para garantir performance, conversão e design de alta qualidade.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Layout className="h-8 w-8 mb-4 text-accent" />,
                title: "Design Responsivo",
                description: "Todos os templates são otimizados para desktop, tablet e dispositivos móveis.",
              },
              {
                icon: <Zap className="h-8 w-8 mb-4 text-accent" />,
                title: "Alta Performance",
                description: "Código limpo e otimizado para carregamento rápido e melhor experiência do usuário.",
              },
              {
                icon: <Code className="h-8 w-8 mb-4 text-accent" />,
                title: "Fácil Personalização",
                description: "Estrutura modular que permite personalizar cores, fontes e conteúdo facilmente.",
              },
              {
                icon: <Users className="h-8 w-8 mb-4 text-accent" />,
                title: "Suporte Dedicado",
                description: "Assistência técnica para implementação e personalização do seu template.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass-card p-8 text-center card-hover">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-24 relative overflow-hidden bg-secondary/30">
        <div className="blob-shape-2 w-[500px] h-[500px] bottom-[-200px] right-[-100px] opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-draw-line inline-block">
                Templates em Destaque
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Uma seleção dos nossos melhores templates para diferentes segmentos de mercado.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/templates"
                className="mt-4 md:mt-0 flex items-center text-accent hover:text-accent/80 transition-colors group"
              >
                Ver todos os templates
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTemplates.map((template, index) => (
              <Link key={template.id} href={`/templates/${template.id}`} className="project-card group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl glass-card"
                >
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="project-overlay">
                    <div className={`w-12 h-12 ${template.color} rounded-full mb-4 flex items-center justify-center`}>
                      <span className="text-accent font-bold">{template.title.charAt(0)}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
                    <p className="text-muted-foreground">{template.category}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="blob-shape w-[500px] h-[500px] top-[-100px] left-[50%] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-draw-line inline-block">Como Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Processo simples e rápido para ter sua landing page no ar em poucos passos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Escolha seu Template",
                description:
                  "Navegue por nossa galeria e escolha o template que melhor se adapta ao seu negócio e objetivos.",
              },
              {
                step: "02",
                title: "Solicite Personalização",
                description:
                  "Preencha o formulário com suas informações e necessidades específicas para personalização.",
              },
              {
                step: "03",
                title: "Receba seu Site",
                description:
                  "Receba sua landing page personalizada pronta para publicação e comece a converter visitantes em clientes.",
              },
            ].map((process, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass-card p-8 rounded-2xl relative card-hover">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-6">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="blob-shape-3 w-[800px] h-[800px] top-[-400px] right-[-400px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-2xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Precisa de um template personalizado?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Entre em contato conosco para discutir suas necessidades específicas e obter um orçamento personalizado.
              </p>
              <Link
                href="/contato"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full inline-flex items-center font-medium hover:bg-accent/90 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                Fale Conosco <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
