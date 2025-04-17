"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function SlabWareCommentsPage() {
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
              <span className="text-2xl font-bold text-white">23</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">SlabWare Comments</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">UX/UI & Comunicação</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">2023</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl mb-8">
                Comments é uma feature que o nome fala por si só, uma espécie de chat, mas que circula por vários e
                vários lugares no sistema, a maior dificuldade desse projeto foi a hierarquia dos comentários.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Desafio</h2>
                  <p>
                    O principal desafio era criar um sistema de comentários que funcionasse de forma integrada em
                    diferentes partes do sistema, mantendo a contextualização e a hierarquia das conversas. Um
                    comentário é feito dentro da página do cliente, esse comentário pode ser sobre um pedido específico
                    feito por esse cliente, o que me levou a criar um modo de expansão do chat onde é possível navegar
                    por essas camadas.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Solução</h2>
                  <p>Desenvolvemos um sistema de comentários hierárquico e contextual que permite aos usuários:</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Navegar entre diferentes níveis de comentários (cliente, pedido, produto) mantendo o contexto
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      <span>Expandir e recolher threads de comentários para melhor visualização e organização</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Acessar o histórico completo de comunicações relacionadas a um cliente ou pedido específico
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Receber notificações contextualizadas sobre novos comentários relevantes para suas
                        responsabilidades
                      </span>
                    </li>
                  </ul>
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
                  <span>Melhoria significativa na comunicação interna sobre pedidos e clientes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <span>Redução de 40% em emails internos e mensagens duplicadas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <span>Aumento da transparência e rastreabilidade das comunicações sobre pedidos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <span>Adoção rápida pelos usuários, com feedback positivo sobre a usabilidade</span>
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
                    <span className="font-medium">2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">UX/UI & Comunicação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Interface do Sistema de Comentários</h2>
          <div className="grid grid-cols-1 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="SlabWare Comments - Interface"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

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
                  alt={`SlabWare Comments - imagem ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/projetos/slabware-mailing"
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
