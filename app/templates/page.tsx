"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const categories = ["Todos", "Negócios", "Saúde", "Gastronomia", "Educação", "Serviços", "E-commerce", "Portfólio"]

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const templates = [
    {
      id: "agency-pro",
      title: "Agency Pro",
      category: "Negócios",
      tags: ["Agência", "Marketing", "Serviços"],
      description: "Template ideal para agências de marketing digital e empresas de serviços.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "fitness-coach",
      title: "Fitness Coach",
      category: "Saúde",
      tags: ["Fitness", "Personal Trainer", "Saúde"],
      description: "Perfeito para personal trainers e profissionais de educação física.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "restaurant-menu",
      title: "Restaurant Menu",
      category: "Gastronomia",
      tags: ["Restaurante", "Cardápio", "Delivery"],
      description: "Template para restaurantes com cardápio digital e sistema de pedidos.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "lawyer-services",
      title: "Lawyer Services",
      category: "Serviços",
      tags: ["Advocacia", "Jurídico", "Consultoria"],
      description: "Ideal para advogados e escritórios de advocacia apresentarem seus serviços.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "online-course",
      title: "Online Course",
      category: "Educação",
      tags: ["Curso", "E-learning", "Educação"],
      description: "Template para venda de cursos online e captação de leads para educadores.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "product-launch",
      title: "Product Launch",
      category: "E-commerce",
      tags: ["Produto", "Lançamento", "Vendas"],
      description: "Perfeito para lançamentos de produtos e campanhas de marketing.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "creative-portfolio",
      title: "Creative Portfolio",
      category: "Portfólio",
      tags: ["Criativo", "Design", "Portfólio"],
      description: "Template para designers, fotógrafos e criativos mostrarem seus trabalhos.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "real-estate",
      title: "Real Estate",
      category: "Serviços",
      tags: ["Imobiliária", "Propriedades", "Vendas"],
      description: "Ideal para corretores imobiliários e imobiliárias apresentarem seus imóveis.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "event-landing",
      title: "Event Landing",
      category: "Negócios",
      tags: ["Evento", "Conferência", "Inscrição"],
      description: "Template para eventos, conferências e captação de inscrições.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "app-download",
      title: "App Download",
      category: "Negócios",
      tags: ["Aplicativo", "Download", "Mobile"],
      description: "Perfeito para promover aplicativos móveis e aumentar downloads.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "beauty-salon",
      title: "Beauty Salon",
      category: "Serviços",
      tags: ["Beleza", "Salão", "Estética"],
      description: "Template para salões de beleza e profissionais de estética.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
    {
      id: "coffee-shop",
      title: "Coffee Shop",
      category: "Gastronomia",
      tags: ["Café", "Restaurante", "Menu"],
      description: "Ideal para cafeterias e pequenos estabelecimentos gastronômicos.",
      image: "/placeholder.svg?height=600&width=800",
      color: "bg-accent/20",
    },
  ]

  const filteredTemplates =
    activeCategory === "Todos"
      ? templates
      : templates.filter((template) => template.category === activeCategory || template.tags.includes(activeCategory))

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
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="blob-shape w-[800px] h-[800px] top-[-400px] right-[-400px] opacity-20"></div>
      <div className="blob-shape-2 w-[600px] h-[600px] bottom-[-300px] left-[-300px] opacity-20"></div>
      <div className="dot-pattern"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 text-sm font-medium">
            Escolha o Melhor para seu Negócio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossos Templates</h1>
          <p className="text-xl text-muted-foreground">
            Escolha entre nossa seleção de templates profissionais para diferentes segmentos de mercado.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12 overflow-x-auto pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary hover:bg-secondary/70 text-secondary-foreground"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template, index) => (
              <motion.div key={template.id} layout variants={fadeInUp} className="group">
                <Link href={`/templates/${template.id}`} className="block">
                  <div className="project-card h-full glass-card overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={template.image || "/placeholder.svg"}
                        alt={template.title}
                        fill
                        className="object-cover"
                      />
                      <div className="project-overlay">
                        <div
                          className={`w-12 h-12 ${template.color} rounded-full mb-4 flex items-center justify-center`}
                        >
                          <span className="text-accent font-bold">{template.title.charAt(0)}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
                        <p className="text-muted-foreground mb-4">{template.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {template.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-background/30 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                          {template.title}
                        </h3>
                        <span className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                          {template.category}
                        </span>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-muted-foreground line-clamp-1">{template.description}</p>
                        <ArrowRight className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground text-lg">Nenhum template encontrado para esta categoria.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
