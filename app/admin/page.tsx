"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, Edit, Trash, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

// Simulando dados de pedidos
const mockOrders = [
  {
    id: "ORD-001",
    customerName: "João Silva",
    template: "Agency Pro",
    businessArea: "Marketing Digital",
    requestDate: "2024-04-05",
    deadline: "1 semana",
    status: "orçamento",
  },
  {
    id: "ORD-002",
    customerName: "Maria Oliveira",
    template: "Fitness Coach",
    businessArea: "Personal Trainer",
    requestDate: "2024-04-03",
    deadline: "2 semanas",
    status: "em contato",
  },
  {
    id: "ORD-003",
    customerName: "Carlos Santos",
    template: "Restaurant Menu",
    businessArea: "Restaurante Italiano",
    requestDate: "2024-04-01",
    deadline: "5 dias",
    status: "finalizado",
  },
  {
    id: "ORD-004",
    customerName: "Ana Pereira",
    template: "Lawyer Services",
    businessArea: "Escritório de Advocacia",
    requestDate: "2024-03-28",
    deadline: "10 dias",
    status: "em contato",
  },
  {
    id: "ORD-005",
    customerName: "Roberto Almeida",
    template: "Online Course",
    businessArea: "Educação Financeira",
    requestDate: "2024-03-25",
    deadline: "3 semanas",
    status: "finalizado",
  },
]

export default function AdminPage() {
  const [orders, setOrders] = useState(mockOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)

  // Filtrar pedidos
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.template.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "todos" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Atualizar status do pedido
  const updateOrderStatus = (id: string, newStatus: string) => {
    setOrders((prevOrders) => prevOrders.map((order) => (order.id === id ? { ...order, status: newStatus } : order)))
  }

  // Excluir pedido
  const deleteOrder = (id: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "orçamento":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Orçamento</Badge>
      case "em contato":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Em Contato</Badge>
      case "finalizado":
        return <Badge className="bg-green-500 hover:bg-green-600">Finalizado</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground">Gerencie as solicitações de templates e pedidos.</p>
        </motion.div>

        <div className="bg-secondary rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por cliente, template ou ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filtrar por status" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os status</SelectItem>
                  <SelectItem value="orçamento">Orçamento</SelectItem>
                  <SelectItem value="em contato">Em Contato</SelectItem>
                  <SelectItem value="finalizado">Finalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="hidden md:table-cell">Template</TableHead>
                  <TableHead className="hidden md:table-cell">Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customerName}</TableCell>
                      <TableCell className="hidden md:table-cell">{order.template}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {new Date(order.requestDate).toLocaleDateString("pt-BR")}
                      </TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSelectedOrder(order)}
                                title="Ver detalhes"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>Detalhes do Pedido {order.id}</DialogTitle>
                                <DialogDescription>Informações completas da solicitação</DialogDescription>
                              </DialogHeader>
                              {selectedOrder && (
                                <div className="space-y-4 mt-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p className="text-sm text-muted-foreground">Cliente</p>
                                      <p className="font-medium">{selectedOrder.customerName}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground">Template</p>
                                      <p className="font-medium">{selectedOrder.template}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground">Área de Atuação</p>
                                      <p className="font-medium">{selectedOrder.businessArea}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground">Data da Solicitação</p>
                                      <p className="font-medium">
                                        {new Date(selectedOrder.requestDate).toLocaleDateString("pt-BR")}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground">Prazo Desejado</p>
                                      <p className="font-medium">{selectedOrder.deadline}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground">Status</p>
                                      <p className="font-medium">{getStatusBadge(selectedOrder.status)}</p>
                                    </div>
                                  </div>

                                  <div className="pt-4 border-t">
                                    <p className="text-sm font-medium mb-2">Alterar Status</p>
                                    <div className="flex gap-2">
                                      <Button
                                        size="sm"
                                        variant={selectedOrder.status === "orçamento" ? "default" : "outline"}
                                        onClick={() => updateOrderStatus(selectedOrder.id, "orçamento")}
                                      >
                                        Orçamento
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant={selectedOrder.status === "em contato" ? "default" : "outline"}
                                        onClick={() => updateOrderStatus(selectedOrder.id, "em contato")}
                                      >
                                        Em Contato
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant={selectedOrder.status === "finalizado" ? "default" : "outline"}
                                        onClick={() => updateOrderStatus(selectedOrder.id, "finalizado")}
                                      >
                                        Finalizado
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" title="Editar">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Editar Pedido</DialogTitle>
                                <DialogDescription>Esta funcionalidade será implementada em breve.</DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" title="Excluir">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Confirmar Exclusão</DialogTitle>
                                <DialogDescription>
                                  Tem certeza que deseja excluir o pedido {order.id}? Esta ação não pode ser desfeita.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="flex justify-end gap-2 mt-4">
                                <Button variant="outline">Cancelar</Button>
                                <Button variant="destructive" onClick={() => deleteOrder(order.id)}>
                                  Excluir
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      Nenhum pedido encontrado com os filtros atuais.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Resumo</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total de Pedidos:</span>
                <span className="font-medium">{orders.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Em Orçamento:</span>
                <span className="font-medium">{orders.filter((o) => o.status === "orçamento").length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Em Contato:</span>
                <span className="font-medium">{orders.filter((o) => o.status === "em contato").length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Finalizados:</span>
                <span className="font-medium">{orders.filter((o) => o.status === "finalizado").length}</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Templates Mais Solicitados</h2>
            <div className="space-y-4">
              {Array.from(new Set(orders.map((order) => order.template)))
                .slice(0, 5)
                .map((template) => (
                  <div key={template} className="flex justify-between">
                    <span className="text-muted-foreground">{template}</span>
                    <span className="font-medium">{orders.filter((o) => o.template === template).length}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
            <div className="space-y-4">
              <Button className="w-full justify-start">
                <Filter className="mr-2 h-4 w-4" /> Filtrar por Data
              </Button>
              <Button className="w-full justify-start">
                <Edit className="mr-2 h-4 w-4" /> Editar Templates
              </Button>
              <Link href="/templates" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="mr-2 h-4 w-4" /> Ver Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
