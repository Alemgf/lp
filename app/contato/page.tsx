"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Github } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    setTimeout(() => {
      console.log("Formulário enviado:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset do estado após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Vamos Conversar</h1>
          <p className="text-xl text-muted-foreground">
            Estou disponível para novos projetos, consultorias e oportunidades de colaboração.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">contato@lorenzoalba.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Telefone</h3>
                  <p className="text-muted-foreground">+55 (00) 00000-0000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Localização</h3>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Me Encontre nas Redes</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full px-6 py-3 rounded-lg flex items-center justify-center font-medium transition-colors ${
                    isSubmitted ? "bg-green-600 text-white" : "bg-accent text-accent-foreground hover:bg-accent/90"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center">Mensagem Enviada!</span>
                  ) : (
                    <span className="flex items-center">
                      Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
