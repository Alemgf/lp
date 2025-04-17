import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Simulando dados de projetos
const getProjectData = (id: string) => {
  return {
    id,
    title: `Projeto ${id}`,
    client: "Cliente Exemplo",
    year: "2023",
    description: "Este é um projeto completo que demonstra minha abordagem desde o planejamento até a entrega final.",
    planning: {
      title: "Planejamento e Rascunho",
      content:
        "Na fase de planejamento, realizamos uma análise detalhada das necessidades do cliente e do mercado. Desenvolvemos personas, mapeamos a jornada do usuário e definimos os principais objetivos do projeto.",
      image: "/placeholder.svg?height=500&width=800",
      sketches: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    proposal: {
      title: "Proposta do Projeto",
      content:
        "Com base no planejamento, desenvolvemos uma proposta detalhada que incluiu estratégias, cronograma, orçamento e expectativas de resultados. Apresentamos conceitos visuais preliminares e definimos os KPIs para mensurar o sucesso.",
      image: "/placeholder.svg?height=500&width=800",
      documents: ["Briefing completo", "Análise de mercado", "Estratégia de implementação", "Orçamento detalhado"],
    },
    final: {
      title: "Projeto Final",
      content:
        "O projeto final foi entregue com todos os elementos planejados e aprovados pelo cliente. Implementamos as soluções propostas, realizamos testes com usuários e fizemos os ajustes necessários para garantir a qualidade e eficácia do resultado.",
      image: "/placeholder.svg?height=500&width=800",
      results: [
        "Aumento de 45% no engajamento",
        "Crescimento de 30% nas conversões",
        "Redução de 25% na taxa de rejeição",
        "Feedback positivo dos usuários",
      ],
    },
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-8">
        <Link href="/projetos" className="flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Projetos
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="bg-muted px-4 py-2 rounded-md">
            <span className="text-xs text-muted-foreground">Cliente</span>
            <p className="font-medium">{project.client}</p>
          </div>
          <div className="bg-muted px-4 py-2 rounded-md">
            <span className="text-xs text-muted-foreground">Ano</span>
            <p className="font-medium">{project.year}</p>
          </div>
        </div>
        <p className="text-lg max-w-3xl">{project.description}</p>
      </div>

      <Tabs defaultValue="planning" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="planning">Planejamento</TabsTrigger>
          <TabsTrigger value="proposal">Proposta</TabsTrigger>
          <TabsTrigger value="final">Projeto Final</TabsTrigger>
        </TabsList>

        <TabsContent value="planning" className="space-y-8">
          <h2 className="text-2xl font-serif font-bold">{project.planning.title}</h2>
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={project.planning.image || "/placeholder.svg"}
              alt="Planejamento"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-lg mb-8">{project.planning.content}</p>

          <h3 className="text-xl font-medium mb-4">Rascunhos e Ideias</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.planning.sketches.map((sketch, index) => (
              <div key={index} className="relative h-48 w-full">
                <Image
                  src={sketch || "/placeholder.svg"}
                  alt={`Rascunho ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="proposal" className="space-y-8">
          <h2 className="text-2xl font-serif font-bold">{project.proposal.title}</h2>
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={project.proposal.image || "/placeholder.svg"}
              alt="Proposta"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-lg mb-8">{project.proposal.content}</p>

          <h3 className="text-xl font-medium mb-4">Documentos da Proposta</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.proposal.documents.map((doc, index) => (
              <div key={index} className="bg-muted p-4 rounded-md">
                <p className="font-medium">{doc}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="final" className="space-y-8">
          <h2 className="text-2xl font-serif font-bold">{project.final.title}</h2>
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={project.final.image || "/placeholder.svg"}
              alt="Projeto Final"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-lg mb-8">{project.final.content}</p>

          <h3 className="text-xl font-medium mb-4">Resultados Alcançados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.final.results.map((result, index) => (
              <div key={index} className="bg-primary/10 p-4 rounded-md">
                <p className="font-medium">{result}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 flex justify-between">
        <Button asChild variant="outline">
          <Link href={`/projetos/projeto-${Number.parseInt(project.id) > 1 ? Number.parseInt(project.id) - 1 : 4}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Projeto Anterior
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`/projetos/projeto-${Number.parseInt(project.id) < 4 ? Number.parseInt(project.id) + 1 : 1}`}>
            Próximo Projeto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
