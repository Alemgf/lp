"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Check } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Simulando dados de templates
const getTemplateData = (id: string) => {
  const templates = {
    "agency-pro": {
      id: "agency-pro",
      title: "Agency Pro",
      category: "Negócios",
      tags: ["Agência", "Marketing", "Serviços"],
      description:
        "Template ideal para agências de marketing digital e empresas de serviços. Design moderno e focado em conversão.",
      color: "bg-[#e63946]",
      previewUrl: "https://example.com/preview/agency-pro",
      features: [
        "Design responsivo para todos os dispositivos",
        "Seções para serviços, portfólio e depoimentos",
        "Formulário de contato integrado",
        "Otimizado para SEO",
        "Carregamento rápido",
        "Compatível com Google Analytics",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextTemplate: "fitness-coach",
    },
    "fitness-coach": {
      id: "fitness-coach",
      title: "Fitness Coach",
      category: "Saúde",
      tags: ["Fitness", "Personal Trainer", "Saúde"],
      description:
        "Perfeito para personal trainers e profissionais de educação física. Layout dinâmico com foco em resultados.",
      color: "bg-[#f4a261]",
      previewUrl: "https://example.com/preview/fitness-coach",
      features: [
        "Design responsivo para todos os dispositivos",
        "Seções para serviços, antes e depois, depoimentos",
        "Integração com calendário para agendamentos",
        "Galeria de fotos e vídeos",
        "Otimizado para SEO",
        "Carregamento rápido",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextTemplate: "restaurant-menu",
    },
    "restaurant-menu": {
      id: "restaurant-menu",
      title: "Restaurant Menu",
      category: "Gastronomia",
      tags: ["Restaurante", "Cardápio", "Delivery"],
      description: "Template para restaurantes com cardápio digital e sistema de pedidos. Design elegante e funcional.",
      color: "bg-[#2b2d42]",
      previewUrl: "https://example.com/preview/restaurant-menu",
      features: [
        "Design responsivo para todos os dispositivos",
        "Cardápio digital interativo",
        "Sistema de pedidos online",
        "Galeria de fotos dos pratos",
        "Integração com WhatsApp para pedidos",
        "Mapa de localização",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextTemplate: "lawyer-services",
    },
    "lawyer-services": {
      id: "lawyer-services",
      title: "Lawyer Services",
      category: "Serviços",
      tags: ["Advocacia", "Jurídico", "Consultoria"],
      description:
        "Ideal para advogados e escritórios de advocacia apresentarem seus serviços. Design sóbrio e profissional.",
      color: "bg-[#2b2d42]",
      previewUrl: "https://example.com/preview/lawyer-services",
      features: [
        "Design responsivo para todos os dispositivos",
        "Seções para áreas de atuação e equipe",
        "Blog integrado para artigos jurídicos",
        "Formulário de contato seguro",
        "Otimizado para SEO",
        "Integração com Google Maps",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextTemplate: "online-course",
    },
    "online-course": {
      id: "online-course",
      title: "Online Course",
      category: "Educação",
      tags: ["Curso", "E-learning", "Educação"],
      description:
        "Template para venda de cursos online e captação de leads para educadores. Design focado em conversão.",
      color: "bg-[#457b9d]",
      previewUrl: "https://example.com/preview/online-course",
      features: [
        "Design responsivo para todos os dispositivos",
        "Seções para conteúdo do curso e benefícios",
        "Depoimentos de alunos",
        "Contador regressivo para promoções",
        "Integração com plataformas de pagamento",
        "Otimizado para SEO",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextTemplate: "product-launch",
    },
    "product-launch": {
      id: "product-launch",
      title: "Product Launch",
      category: "E-commerce",
      tags: ["Produto", "Lançamento", "Vendas"],
      description: "Perfeito para lançamentos de produtos e campanhas de marketing. Design impactante e persuasivo.",
      color: "bg-[#2a9d8f]",
      previewUrl: "https://example.com/preview/product-launch",
      features: [
        "Design responsivo para todos os dispositivos",
        "Seções para benefícios do produto e FAQ",
        "Contador regressivo para lançamento",
        "Galeria de imagens do produto",
        "Integração com plataformas de pagamento",
        "Otimizado para conversão",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",

        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextTemplate: "creative-portfolio",
    },
    "creative-portfolio": {
      id: "creative-portfolio",
      title: "Creative Portfolio",
      category: "Portfólio",
      tags: ["Criativo", "Design", "Portfólio"],
      description:
        "Template para designers, fotógrafos e criativos mostrarem seus trabalhos. Design minimalista e elegante.",
      color: "bg-[#606c38]",
      previewUrl: "https://example.com/preview/creative-portfolio",
      features: [
        "Design responsivo para todos os dispositivos",
        "Galeria de projetos com filtros",
        "Seção de habilidades e experiência",
        "Blog integrado",
        "Formulário de contato",
        "Integração com redes sociais",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextTemplate: "agency-pro",
    },
  }

  return templates[id as keyof typeof templates]
}

export default function TemplatePage({ params }: { params: { id: string } }) {
  const [template, setTemplate] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando carregamento de dados
    setTimeout(() => {
      setTemplate(getTemplateData(params.id))
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

  if (!template) {
    return (
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Template não encontrado</h1>
          <p className="text-muted-foreground mb-8">O template que você está procurando não existe ou foi removido.</p>
          <Link
            href="/templates"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para Templates
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
            href="/templates"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Templates
          </Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className={`w-16 h-16 ${template.color} rounded-full flex items-center justify-center`}>
              <span className="text-2xl font-bold text-white">{template.title.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">{template.title}</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">{template.category}</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag: string, i: number) => (
                    <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt={template.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <a
                    href={template.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
                  >
                    Ver Demo Completa <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="text-xl mb-8">{template.description}</p>

              <h2 className="text-2xl font-bold mb-6">Características</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {template.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Solicitar este Template</h2>
              <p className="mb-6">
                Interessado neste template? Clique no botão abaixo para preencher o formulário de solicitação e
                personalizaremos este template de acordo com as necessidades do seu negócio.
              </p>

              <Link href={`/templates/${template.id}/solicitar`}>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Solicitar Personalização <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Informações</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">{template.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Responsivo:</span>
                    <span className="font-medium">Sim</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Compatibilidade:</span>
                    <span className="font-medium">Todos os navegadores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tempo de Entrega:</span>
                    <span className="font-medium">3-5 dias úteis</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Incluso na Personalização</h2>
                <div className="space-y-3">
                  {[
                    "Personalização de cores e fontes",
                    "Inserção do seu conteúdo",
                    "Otimização de imagens",
                    "Configuração de domínio",
                    "Suporte técnico por 30 dias",
                    "Instruções de uso",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {template.gallery.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${template.title} - imagem ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link
              href={`/templates/${template.nextTemplate}`}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
            >
              Próximo Template <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/templates"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full inline-flex items-center font-medium hover:bg-secondary/70 transition-colors border border-primary/30"
            >
              Ver Todos os Templates
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
