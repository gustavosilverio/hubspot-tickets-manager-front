import { useObterListaTickets } from "@/api/controllers/tickets"
import { useState } from "react"

export const useHome = () => {
	const [search, setSearch] = useState("")

	const { data: tickets, isLoading: ticketsIsLoading } =
		useObterListaTickets()

	const normalizedSearch = search.toLowerCase()

	const filteredTickets = tickets?.data
		? tickets.data.filter((t) => {
				if (!normalizedSearch) return true

				const subject = t.properties?.subject || ""
				return subject.toLowerCase().includes(normalizedSearch)
			})
		: []

	return {
		tickets: filteredTickets,
		ticketsIsLoading,
		search,
		setSearch,
	}
}
