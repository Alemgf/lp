"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function SlabWareDashboardPage() {
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
              <span className="text-2xl font-bold text-white">22</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">SlabWare Dashboard</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">UI/UX Design</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">2022-2023</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl mb-8">
                Desenvolvimento de uma interface de dashboard para monitoramento de métricas em tempo real, com foco em
                usabilidade e visualização de dados para empresas do setor de pedras.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Desafio</h2>
                  <p>
                    Desenvolver uma interface que apresentasse dados complexos de forma clara e intuitiva, permitindo
                    tomadas de decisão rápidas e eficientes. Os usuários precisavam visualizar informações de
                    inventário, vendas e produção em um único lugar, mas a quantidade de dados tornava difícil criar uma
                    interface que fosse ao mesmo tempo completa e fácil de usar.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Solução</h2>
                  <p>
                    Design de uma interface minimalista e funcional, com foco na hierarquia visual e na apresentação
                    clara dos dados. Implementação de gráficos interativos e filtros avançados para facilitar a análise.
                    Criamos um sistema de painéis personalizáveis que permitiam aos usuários configurar suas próprias
                    visualizações com base em suas necessidades específicas.
                  </p>
                  <p className="mt-4">
                    Utilizamos princípios de design de informação para garantir que os dados mais importantes estivessem
                    sempre em destaque, e implementamos um sistema de alertas visuais para chamar a atenção para
                    métricas que exigiam ação imediata.
                  </p>
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
                  <span>Adoção da ferramenta por diversas empresas do setor</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <span>Redução de 35% no tempo de análise de dados</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <span>Melhoria na tomada de decisões baseadas em dados</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <span>Feedback positivo sobre a usabilidade da interface</span>
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
                    <span className="font-medium">2022-2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Galeria do Projeto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=600&width=600`}
                  alt={`SlabWare Dashboard - imagem ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/projetos/slabware-job-tracker"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full inline-flex items-center font-medium hover:bg-secondary/70 transition-colors border border-primary/30"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Projeto Anterior
            </Link>

            <Link
              href="/projetos/slabware"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
            >
              Voltar para SlabWare
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
