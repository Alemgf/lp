"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Upload, X, Check } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Simulando dados de templates
const getTemplateData = (id: string) => {
  const templates = {
    "agency-pro": {
      id: "agency-pro",
      title: "Agency Pro",
      category: "Negócios",
      color: "bg-[#e63946]",
    },
    "fitness-coach": {
      id: "fitness-coach",
      title: "Fitness Coach",
      category: "Saúde",
      color: "bg-[#f4a261]",
    },
    "restaurant-menu": {
      id: "restaurant-menu",
      title: "Restaurant Menu",
      category: "Gastronomia",
      color: "bg-[#2b2d42]",
    },
    "lawyer-services": {
      id: "lawyer-services",
      title: "Lawyer Services",
      category: "Serviços",
      color: "bg-[#2b2d42]",
    },
    "online-course": {
      id: "online-course",
      title: "Online Course",
      category: "Educação",
      color: "bg-[#457b9d]",
    },
    "product-launch": {
      id: "product-launch",
      title: "Product Launch",
      category: "E-commerce",
      color: "bg-[#2a9d8f]",
    },
    "creative-portfolio": {
      id: "creative-portfolio",
      title: "Creative Portfolio",
      category: "Portfólio",
      color: "bg-[#606c38]",
    },
  }

  return templates[id as keyof typeof templates]
}

export default function SolicitarTemplatePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [template] = useState(getTemplateData(params.id))
  const [formData, setFormData] = useState({
    name: "",
    businessArea: "",
    objective: "",
    deadline: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    setTimeout(() => {
      console.log("Formulário enviado:", { ...formData, files })
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Redirecionamento após envio bem-sucedido
      setTimeout(() => {
        router.push("/templates/solicitacao-enviada")
      }, 2000)
    }, 1500)
  }

  if (!template) {
    return (
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Template não encontrado</h1>
          <p className="text-muted-foreground mb-8">O template que você está procurando não existe ou foi removido.</p>
          <Link
            href="/templates"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para Templates
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link
            href={`/templates/${params.id}`}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para {template.title}
          </Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className={`w-16 h-16 ${template.color} rounded-full flex items-center justify-center`}>
              <span className="text-2xl font-bold text-white">{template.title.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">Solicitar Template</h1>
              <p className="text-muted-foreground mt-2">
                Preencha o formulário abaixo para solicitar a personalização do template {template.title}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessArea">Área de Atuação</Label>
                    <Input
                      id="businessArea"
                      name="businessArea"
                      value={formData.businessArea}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Marketing, Saúde, Educação, etc."
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="objective">Objetivo com o Website</Label>
                    <Textarea
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      required
                      placeholder="Descreva o que você espera alcançar com este website"
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="deadline">Prazo Desejado</Label>
                    <Input
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      required
                      placeholder="Ex: 1 semana, 15 dias, etc."
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Documentos Adicionais (opcional)</Label>
                    <div className="mt-1 border-2 border-dashed border-muted rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
                      <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple className="hidden" />
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="flex flex-col items-center justify-center"
                      >
                        <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground mb-1">
                          Clique para fazer upload ou arraste e solte arquivos aqui
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Suporta imagens, PDFs, documentos Word/Excel (máx. 10MB cada)
                        </p>
                      </div>
                    </div>

                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium">Arquivos anexados:</p>
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-secondary p-2 rounded-md">
                            <span className="text-sm truncate max-w-[80%]">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-muted-foreground hover:text-primary"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full ${
                    isSubmitted ? "bg-green-600 hover:bg-green-700" : "bg-accent hover:bg-accent/90"
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
                      Enviando solicitação...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center">
                      <Check className="mr-2 h-5 w-5" /> Solicitação enviada!
                    </span>
                  ) : (
                    "Enviar Solicitação"
                  )}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Resumo</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Template:</span>
                    <span className="font-medium">{template.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">{template.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tempo de Entrega:</span>
                    <span className="font-medium">3-5 dias úteis</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Próximos Passos</h2>
                <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                  <li>Envie este formulário com suas informações</li>
                  <li>Nossa equipe entrará em contato em até 24 horas úteis</li>
                  <li>Discutiremos detalhes específicos e enviaremos um orçamento</li>
                  <li>Após aprovação, iniciaremos a personalização do template</li>
                  <li>Você receberá o template personalizado no prazo combinado</li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
