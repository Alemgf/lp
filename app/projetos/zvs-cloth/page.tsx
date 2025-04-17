"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ZVSClothPage() {
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
            href="/projetos"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Projetos
          </Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#e63946] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">14</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">ZVS Cloth</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">Moda</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">2014-2019</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl mb-8">
                ZVS foi meu primeiro empreendimento. Comecei muito novo no início do ensino médio e me serviu como uma
                grande escola, pois levava muito a sério a construção da marca. Eu já tinha algum conhecimento de
                Design, Fotografia e Edição porém na marca foi onde eu pude testar de fato minhas habilidades e colocar
                a prova no mercado.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
                  <p>
                    Desenvolvimento completo de uma marca de roupas com foco em streetwear, desde a concepção da
                    identidade visual até a produção e comercialização das peças. A ZVS nasceu da minha paixão por moda
                    urbana e design minimalista, com o objetivo de criar peças autênticas e de qualidade para o público
                    jovem.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Desafio</h2>
                  <p>
                    Criar uma marca autêntica e competitiva no mercado de moda, com recursos limitados e em um mercado
                    altamente concorrido. O principal desafio foi desenvolver uma identidade visual forte e consistente,
                    que se destacasse no mercado e conquistasse um público fiel, além de gerenciar todos os aspectos do
                    negócio, desde o design até a produção e comercialização.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Solução</h2>
                  <p>
                    Utilizei meus conhecimentos em design e fotografia para criar uma identidade visual forte e
                    consistente. Desenvolvi coleções com design minimalista e foco na qualidade das peças, criando um
                    posicionamento diferenciado no mercado. Cada coleção tinha um conceito único, com editoriais de moda
                    que contavam uma história e fortaleciam a conexão emocional com o público.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">Resultados</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <span>Reconhecimento da marca no mercado local</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <span>Desenvolvimento de 5 coleções completas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <span>Crescimento constante nas vendas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <span>Estabelecimento de uma comunidade fiel de clientes</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-muted">
                <h3 className="text-lg font-bold mb-4">Informações do Projeto</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cliente:</span>
                    <span className="font-medium">Marca Própria</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Período:</span>
                    <span className="font-medium">2014-2019</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">Moda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Coleções e Campanhas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/zvs/zvs-windbreaker.png"
                alt="ZVS Windbreaker Campaign"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image src="/images/zvs/zvs-drop01.png" alt="ZVS Drop 01 Campaign" fill className="object-cover" />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Produtos</h2>
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <Image
                src="/images/zvs/zvs-collection.png"
                alt="ZVS Collection Overview"
                fill
                className="object-contain bg-white"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Editoriais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/zvs/zvs-model-red.png"
                alt="ZVS Editorial - Red Shirt"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/zvs/zvs-model-black.png"
                alt="ZVS Editorial - Black Shirt"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/zvs/zvs-model-couch.png"
                alt="ZVS Editorial - Model on Couch"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Identidade Visual</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <Image src="/images/zvs/zvs-labels.png" alt="ZVS Brand Labels" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <Image src="/images/zvs/zvs-website.png" alt="ZVS Website" fill className="object-cover" />
            </motion.div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/projetos/eco-brand"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full inline-flex items-center font-medium hover:bg-secondary/70 transition-colors border border-primary/30"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Projeto Anterior
            </Link>

            <Link
              href="/projetos/help-bar-eventos"
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
