"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SlabWareJobTrackerPage() {
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
              <span className="text-2xl font-bold text-white">24</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">Job Tracker</h1>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground">UX/UI Design</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">2024</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl mb-8">
                No ano de 2024 gerenciei um grande projeto junto com a equipe de UX-UI. Fizemos uma re-fatoração da
                feature Job Tracker toda sua cadeia de ponta a ponta.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Desafio</h2>
                  <p>
                    Grande parte da estrutura já existia mas muita coisa no fluxo não fazia sentido e precisava ser
                    re-organizado. O sistema tinha problemas de usabilidade que dificultavam a adoção pelos usuários e
                    tornavam o processo de gerenciamento de tarefas mais complexo do que deveria ser.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Solução</h2>
                  <p>
                    A grande conclusão do projeto foi a junção de 3 filtros como se fosse apenas 1 no qual chamamos de
                    Projeto, dessa forma independe de qual das 3 informações o usuário usasse no filtro já garantíamos
                    algumas outras informações que agilizavam o processo de inputs quando fosse add uma tarefa ou
                    evento, além de limpar mais a tela.
                  </p>
                  <p className="mt-4">
                    Trabalhamos em estreita colaboração com os usuários finais para entender suas necessidades e pontos
                    de dor, redesenhando a interface para torná-la mais intuitiva e eficiente. Simplificamos fluxos
                    complexos e melhoramos a visualização de informações críticas.
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
                  <span>Redução de 40% no tempo necessário para criar e gerenciar tarefas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <span>Aumento de 65% na adoção da ferramenta pelos usuários</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <span>Melhoria significativa na satisfação do usuário, medida por pesquisas de feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#2b2d42] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <span>Interface mais limpa e intuitiva, reduzindo a curva de aprendizado para novos usuários</span>
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
                    <span className="font-medium">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">UX/UI Design</span>
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
                  alt={`SlabWare Job Tracker - imagem ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/projetos/slabware-website"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full inline-flex items-center font-medium hover:bg-secondary/70 transition-colors border border-primary/30"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Projeto Anterior
            </Link>

            <Link
              href="/projetos/slabware-dashboard"
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
