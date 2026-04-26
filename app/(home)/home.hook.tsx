import { useObterListaTickets } from "@/api/controllers/tickets"
import { Enums } from "@/lib/utils/types"
import { useState } from "react"

export const useHome = () => {
	const [page, setPage] = useState(1)
	const [status, setStatus] = useState<Enums.HubspotTicketPipelineStatus>(
		Enums.HubspotTicketPipelineStatus.NOVO,
	)
	const [search, setSearch] = useState("")

	const { data: tickets, isLoading: ticketsIsLoading } =
		useObterListaTickets()

	return {
		tickets,
		ticketsIsLoading,
		page,
		setPage,
		status,
		setStatus,
		search,
		setSearch,
	}
}
