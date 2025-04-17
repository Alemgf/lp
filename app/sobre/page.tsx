"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Zap, Layout, Users } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre Nosso Studio</h1>
          <p className="text-xl text-muted-foreground">
            Somos especialistas em criar landing pages de alta conversão para impulsionar seu negócio online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Nossa História</h2>
            <div className="space-y-6 text-lg">
              <p>
                Fundado em 2024, nosso studio nasceu da paixão por design e desenvolvimento web, combinada com a
                percepção de que muitas empresas precisam de landing pages eficientes, mas não têm tempo ou recursos
                para desenvolvê-las do zero.
              </p>
              <p>
                Unimos nossas habilidades em design, desenvolvimento e marketing para criar templates de landing pages
                que não apenas são visualmente atraentes, mas também são estrategicamente projetados para converter
                visitantes em clientes.
              </p>
              <p>
                Nossa missão é democratizar o acesso a landing pages de alta qualidade, permitindo que empresas de todos
                os tamanhos possam ter uma presença online profissional e eficaz em tempo recorde.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=600" alt="Nossa Equipe" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-syne font-bold">
              <div className="text-center">
                <div className="text-3xl">2024</div>
                <div className="text-sm">
                  Ano de
                  <br />
                  Fundação
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa Abordagem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layout className="h-12 w-12 mb-4 text-primary" />,
                title: "Design Centrado no Usuário",
                description:
                  "Criamos templates que priorizam a experiência do usuário, garantindo navegação intuitiva e foco na conversão.",
              },
              {
                icon: <Zap className="h-12 w-12 mb-4 text-primary" />,
                title: "Performance Otimizada",
                description:
                  "Todos os nossos templates são otimizados para carregamento rápido e melhor desempenho em todos os dispositivos.",
              },
              {
                icon: <Code className="h-12 w-12 mb-4 text-primary" />,
                title: "Código Limpo",
                description:
                  "Desenvolvemos com as melhores práticas de codificação, garantindo templates fáceis de personalizar e manter.",
              },
              {
                icon: <Users className="h-12 w-12 mb-4 text-primary" />,
                title: "Suporte Personalizado",
                description:
                  "Oferecemos suporte dedicado para garantir que seu template seja personalizado de acordo com suas necessidades específicas.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.6 }}
                className="bg-secondary p-8 rounded-xl text-center"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "João Silva",
                role: "Designer UI/UX",
                image: "/placeholder.svg?height=400&width=400",
                description:
                  "Especialista em criar interfaces intuitivas e visualmente atraentes, com foco em conversão.",
              },
              {
                name: "Maria Oliveira",
                role: "Desenvolvedora Frontend",
                image: "/placeholder.svg?height=400&width=400",
                description: "Transforma designs em código limpo e otimizado, garantindo performance e responsividade.",
              },
              {
                name: "Carlos Santos",
                role: "Especialista em Marketing",
                image: "/placeholder.svg?height=400&width=400",
                description:
                  "Analisa e implementa estratégias para maximizar a eficácia das landing pages na conversão.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.8 }}
                className="bg-secondary rounded-xl overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-secondary to-secondary/50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore nossa coleção de templates e encontre a landing page perfeita para o seu negócio. Estamos prontos
              para ajudar você a ter uma presença online impactante.
            </p>
            <Link
              href="/templates"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full inline-flex items-center font-medium hover:bg-accent/90 transition-colors text-lg"
            >
              Ver Templates <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
