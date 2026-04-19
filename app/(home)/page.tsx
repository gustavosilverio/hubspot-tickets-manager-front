"use client"

import { Header } from "@/components/Header/header"
import {
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	Card,
} from "@/components/ui/card"
import { TicketsTable } from "@/components/TicketsTable/ticketsTable"
import { Ticket, TicketStatus } from "@/lib/types"
import { TicketsPagination } from "@/components/TicketsPagination/tickets-pagination"
import { useState } from "react"
import { TicketsFilters } from "@/components/TicketsFilters/tickets-filters"

export default function Home() {
	const PAGE_SIZE = 10
	const total = 12
	const totalPages = Math.ceil(total / PAGE_SIZE)

	const [page, setPage] = useState(1)
	const [status, setStatus] = useState<TicketStatus | "ALL">("ALL")
	const [search, setSearch] = useState("")

	const tickets: Ticket[] = [
		{
			id: "ticket-001-abc123",
			subject: "Problema com integração de pagamento",
			status: "IN_PROGRESS",
			priority: "HIGH",
			createdAt: "2026-04-15T10:30:00Z",
			ownerName: "Maria Silva",
		},
		{
			id: "ticket-002-def456",
			subject: "Dúvida sobre faturamento",
			status: "NEW",
			priority: "MEDIUM",
			createdAt: "2026-04-16T14:20:00Z",
			ownerName: "João Santos",
		},
		{
			id: "ticket-003-ghi789",
			subject: "Solicitação de cancelamento",
			status: "WAITING",
			priority: "LOW",
			createdAt: "2026-04-17T09:00:00Z",
			ownerName: "Ana Costa",
		},
		{
			id: "ticket-004-jkl012",
			subject: "Erro ao acessar relatórios",
			status: "CLOSED",
			priority: "MEDIUM",
			createdAt: "2026-04-10T11:45:00Z",
			ownerName: "Pedro Lima",
		},
		{
			id: "ticket-005-mno345",
			subject: "Atualização de dados cadastrais",
			status: "NEW",
			priority: "LOW",
			createdAt: "2026-04-18T08:15:00Z",
			ownerName: "Carla Mendes",
		},
		{
			id: "ticket-006-pqr678",
			subject: "Problema de performance no dashboard",
			status: "IN_PROGRESS",
			priority: "HIGH",
			createdAt: "2026-04-14T16:30:00Z",
			ownerName: "Lucas Oliveira",
		},
		{
			id: "ticket-007-stu901",
			subject: "Integração com sistema externo",
			status: "WAITING",
			priority: "MEDIUM",
			createdAt: "2026-04-12T13:00:00Z",
			ownerName: "Fernanda Rocha",
		},
		{
			id: "ticket-008-vwx234",
			subject: "Solicitação de nova funcionalidade",
			status: "NEW",
			priority: "LOW",
			createdAt: "2026-04-19T07:30:00Z",
			ownerName: "Ricardo Alves",
		},
		{
			id: "ticket-009-yza567",
			subject: "Erro de autenticação",
			status: "CLOSED",
			priority: "HIGH",
			createdAt: "2026-04-08T10:00:00Z",
			ownerName: "Juliana Martins",
		},
		{
			id: "ticket-010-bcd890",
			subject: "Dúvida sobre API",
			status: "IN_PROGRESS",
			priority: "MEDIUM",
			createdAt: "2026-04-13T15:45:00Z",
			ownerName: "Bruno Ferreira",
		},
		{
			id: "ticket-011-efg123",
			subject: "Configuração de webhooks",
			status: "NEW",
			priority: "MEDIUM",
			createdAt: "2026-04-11T12:20:00Z",
			ownerName: "Patrícia Souza",
		},
		{
			id: "ticket-012-hij456",
			subject: "Problema de sincronização",
			status: "WAITING",
			priority: "HIGH",
			createdAt: "2026-04-09T09:30:00Z",
			ownerName: "Marcos Pereira",
		},
	]

	return (
		<div className="min-h-screen bg-background">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<Card>
					<CardHeader>
						<CardTitle>Tickets</CardTitle>
						<CardDescription>
							Gerencie e acompanhe todos os seus tickets do
							HubSpot
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-6">
						<TicketsFilters
							search={search}
							onSearchChange={setSearch}
							status={status}
							onStatusChange={setStatus}
						/>

						<TicketsTable tickets={tickets} isLoading={false} />

						<TicketsPagination
							currentPage={page}
							totalPages={totalPages}
							totalItems={total}
							pageSize={PAGE_SIZE}
							onPageChange={setPage}
						/>
					</CardContent>
				</Card>
			</main>
		</div>
	)
}
