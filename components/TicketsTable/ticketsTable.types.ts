import { ObterListaTickets } from "@/api/models/tickets.types"

export type TicketsTableProps = {
	data: ObterListaTickets.Ticket[]
	isLoading: boolean
}
