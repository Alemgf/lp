"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SlabWareWebsitePage() {
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
              <h1 className="text-4xl md:text-6xl font-bold">SlabWare Website</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">Web Design</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">2021</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl mb-8">
                Meu primeiro grande projeto foi atualizar o site da empresa, após analisar o site identifiquei que a
                empresa não se comunicava da melhor forma com nossos leads.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Desafio</h2>
                  <p>
                    Precisávamos de um site mais robusto com algumas camadas para prender o usuário e assim ter mais
                    retenção pra ajudar no SEO. O site existente não estava convertendo leads de forma eficiente e não
                    comunicava adequadamente o valor dos produtos da empresa.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Solução</h2>
                  <p>
                    Desenvolvi um novo site com mais CTAs e que conversava melhor com cada versão. O redesign focou em
                    melhorar a jornada do usuário, destacar os benefícios dos produtos e otimizar a estrutura para
                    melhor desempenho em SEO. Implementei uma estratégia de conteúdo que demonstrava claramente como os
                    produtos da SlabWare resolviam problemas específicos do setor de pedras.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">Resultados</h2>
              <p className="mb-6">6 meses após subir o novo site nossos números foram:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <div>
                    <span className="font-bold">Média de Acessos/Mês</span>
                    <p className="text-accent">Aumento de 328,66%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <span className="font-bold">Total de Leads Captados</span>
                    <p className="text-accent">Aumento de 61,59%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div>
                    <span className="font-bold">Total de Vendas Feitas</span>
                    <p className="text-accent">Aumento de 93,18%</p>
                  </div>
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
                    <span className="font-medium">2021</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">Web Design</span>
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
                  alt={`SlabWare Website - imagem ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/projetos/slabware"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full inline-flex items-center font-medium hover:bg-secondary/70 transition-colors border border-primary/30"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar para SlabWare
            </Link>

            <Link
              href="/projetos/slabware-job-tracker"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
            >
              Próximo Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
