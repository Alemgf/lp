"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function SlabWareMarketingPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando carregamento de dados
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

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

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link
            href="/projetos/slabware"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para SlabWare
          </Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#2b2d42] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">21</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">SlabWare Marketing</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">Estratégia & Gestão</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">2021-Hoje</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl mb-8">
                Como gerente de Marketing ao longo dos últimos 3 anos, ajudei a deixar os setores mais robustos para
                cada canal, desenvolvendo estratégias integradas e mensuráveis para o crescimento da empresa.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
                  <p>
                    Ao assumir a gestão de marketing da SlabWare, encontrei uma estrutura básica que precisava ser
                    expandida e profissionalizada. Meu trabalho envolveu a criação de uma estratégia omnichannel
                    completa, abrangendo diversos canais e pontos de contato com o cliente, sempre com foco em
                    resultados mensuráveis e alinhados aos objetivos de negócio.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Áreas de Atuação</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Landing Pages e Emails</h3>
                      <p>
                        Desenvolvimento de landing pages otimizadas para conversão e campanhas de email marketing
                        segmentadas, com foco em nutrição de leads e retenção de clientes. Implementação de testes A/B e
                        otimização contínua baseada em dados.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Social</h3>
                      <p>
                        Criação de estratégia de conteúdo para redes sociais B2B, com foco em LinkedIn e Instagram.
                        Desenvolvimento de calendário editorial, produção de conteúdo educativo e cases de sucesso, além
                        de gestão de comunidade e relacionamento com o público.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">ADS</h3>
                      <p>
                        Planejamento e execução de campanhas de mídia paga em plataformas como Google Ads, LinkedIn Ads
                        e Facebook Ads. Definição de públicos-alvo, criação de anúncios, otimização de campanhas e
                        análise de resultados para maximizar o ROI.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Website</h3>
                      <p>
                        Redesign completo do site institucional com foco em UX/UI e SEO. Implementação de estratégia de
                        conteúdo para atração orgânica, otimização de funil de conversão e integração com ferramentas de
                        análise e automação de marketing.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Blog</h3>
                      <p>
                        Criação de blog corporativo com conteúdo relevante para o setor de pedras, abordando temas como
                        gestão de inventário, tendências de mercado e cases de sucesso. Desenvolvimento de estratégia de
                        SEO e distribuição de conteúdo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">Resultados</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <span>Aumento de 250% no tráfego orgânico do site em 2 anos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <span>Crescimento de 180% na geração de leads qualificados</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <span>Redução de 35% no custo por aquisição de cliente (CAC)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <span>Aumento de 75% no engajamento nas redes sociais</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-muted">
                <h3 className="text-lg font-bold mb-4">Informações do Projeto</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cliente:</span>
                    <span className="font-medium">SlabWare</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Período:</span>
                    <span className="font-medium">2021-Hoje</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">Marketing Estratégico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Canais e Estratégias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Landing Pages", icon: "📄" },
              { title: "Email Marketing", icon: "📧" },
              { title: "Social Media", icon: "📱" },
              { title: "Google Ads", icon: "🔍" },
              { title: "SEO", icon: "📈" },
              { title: "Content Marketing", icon: "✍️" },
            ].map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-xl"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                <p className="text-muted-foreground">
                  Estratégias personalizadas e otimizadas para maximizar resultados em cada canal.
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/projetos/slabware"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar para SlabWare
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
