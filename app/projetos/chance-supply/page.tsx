"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ChanceSupplyPage() {
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
            <div className="w-16 h-16 bg-[#f4a261] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">19</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">Chance Supply</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">Moda</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">2019-2021</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl mb-8">
                Chance foi o meu segundo empreendimento. Abri a marca mais maduro no Design e com o intuito de aplicar
                todo meu conhecimento de MKT para impulsionar o negócio. Tive grandes resultados com vendas online e
                presença em 5 lojas físicas da grande vitória.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
                  <p>
                    Desenvolvimento completo de uma marca de moda streetwear, desde a concepção da identidade visual até
                    a produção, marketing e comercialização das peças em lojas físicas e online. A Chance Supply nasceu
                    como uma evolução da minha experiência anterior, com um posicionamento mais maduro e estratégias de
                    marketing mais elaboradas.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Desafio</h2>
                  <p>
                    Criar uma marca de moda que se destacasse em um mercado competitivo, aplicando conhecimentos de
                    design e marketing para impulsionar o crescimento e alcançar reconhecimento. O principal desafio foi
                    desenvolver uma identidade visual única e memorável, que comunicasse os valores da marca e
                    conquistasse tanto o público online quanto o de lojas físicas.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Solução</h2>
                  <p>
                    Desenvolvimento de uma identidade visual forte e contemporânea, com foco em design de qualidade e
                    estratégias de marketing digital e físico. Criação de coleções exclusivas e direção criativa de
                    editoriais de moda para fortalecer o posicionamento da marca. Implementação de estratégias de
                    distribuição em lojas físicas selecionadas e fortalecimento da presença online através de redes
                    sociais e e-commerce.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">Resultados</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#f4a261] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <span>Presença em 5 lojas físicas na grande Vitória</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#f4a261] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <span>Forte presença online com vendas expressivas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#f4a261] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <span>Peças usadas por pessoas famosas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#f4a261] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <span>Artigos escritos em blogs conhecidos sobre a marca</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#f4a261] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">5</span>
                  </div>
                  <span>Reconhecimento no mercado de moda streetwear</span>
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
                    <span className="font-medium">2019-2021</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">Moda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Identidade Visual</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-[#fae1dd]"
            >
              <Image src="/images/chance/chance-logo.png" alt="Chance Supply Logo" fill className="object-contain" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image src="/images/chance/chance-store.png" alt="Chance Supply Store" fill className="object-cover" />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Coleções</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-[#f8edeb]"
            >
              <Image
                src="/images/chance/chance-aftergrass.png"
                alt="Chance Supply After Grass Collection"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-white"
            >
              <Image
                src="/images/chance/chance-tshirts-black.png"
                alt="Chance Supply Black T-shirts"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Designs Técnicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-white"
            >
              <Image
                src="/images/chance/chance-designs-jacket.png"
                alt="Chance Supply - Designs Técnicos de Jaqueta"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-white"
            >
              <Image
                src="/images/chance/chance-designs-pants.png"
                alt="Chance Supply - Designs Técnicos de Calça"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-white"
            >
              <Image
                src="/images/chance/chance-designs-shorts.png"
                alt="Chance Supply - Designs Técnicos de Shorts"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          <h3 className="text-xl font-bold mb-4">Designs Especiais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-white"
            >
              <Image
                src="/images/chance/chance-designs-jacket-bag.png"
                alt="Chance Supply - Design de Jaqueta e Bolsa"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-white"
            >
              <Image
                src="/images/chance/chance-tshirt-beyou-white.png"
                alt="Chance Supply - Camiseta Be You"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Campanhas e Editoriais</h2>

          <h3 className="text-xl font-bold mb-4">Coleção Flowers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/chance/chance-flowers-male.png"
                alt="Chance Supply Flowers Collection - Male"
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
                src="/images/chance/chance-flowers-female.png"
                alt="Chance Supply Flowers Collection - Female"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <h3 className="text-xl font-bold mb-4">Editorial Minimalista</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/chance/chance-models-face.png"
                alt="Chance Supply Editorial - Face Art"
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
                src="/images/chance/chance-models-couch.png"
                alt="Chance Supply Editorial - Couch"
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
                src="/images/chance/chance-gradient-logo.png"
                alt="Chance Supply Editorial - Gradient Logo"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <h3 className="text-xl font-bold mb-4">Peças Especiais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/chance/chance-white-red.png"
                alt="Chance Supply - White and Red Piece"
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
                src="/images/chance/chance-bikini.png"
                alt="Chance Supply - Swimwear"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Distribuição e Parcerias</h2>
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <Image
                src="/images/chance/chance-malloca.png"
                alt="Chance Supply at Malloca Store"
                fill
                className="object-contain bg-white"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Presença Digital</h2>
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <Image
                src="/images/chance/chance-website.png"
                alt="Chance Supply Website"
                fill
                className="object-contain bg-white"
              />
            </motion.div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/projetos/dmc-social"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full inline-flex items-center font-medium hover:bg-secondary/70 transition-colors border border-primary/30"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Projeto Anterior
            </Link>

            <Link
              href="/projetos/slabware"
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
