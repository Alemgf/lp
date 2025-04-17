"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function SolicitacaoEnviadaPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Solicitação Enviada!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Recebemos sua solicitação de template e entraremos em contato em breve para discutir os próximos passos.
          </p>
          <div className="space-y-4 mb-12">
            <div className="bg-secondary p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">O que acontece agora?</h2>
              <ol className="text-left space-y-4 list-decimal list-inside text-muted-foreground">
                <li>Nossa equipe analisará sua solicitação em até 24 horas úteis</li>
                <li>Entraremos em contato por e-mail para discutir detalhes específicos</li>
                <li>Enviaremos um orçamento personalizado baseado nas suas necessidades</li>
                <li>Após aprovação, iniciaremos o processo de personalização</li>
                <li>Você receberá seu template personalizado no prazo combinado</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full inline-flex items-center justify-center font-medium hover:bg-secondary/70 transition-colors border border-primary/30"
            >
              Ver Mais Templates
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center justify-center font-medium hover:bg-primary/90 transition-colors"
            >
              Voltar para Home <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
