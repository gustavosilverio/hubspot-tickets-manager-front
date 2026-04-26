import { useQuery } from "@tanstack/react-query"
import { ObterListaTickets, TicketsQueryKeys } from "../models/tickets.types"
import { api } from "@/lib/config/axios"

// Query
export const useObterListaTickets = () => {
	return useQuery({
		queryKey: [TicketsQueryKeys.ObterListaTickets],

		queryFn: async () => {
			const { data } =
				await api.get<ObterListaTickets.Response>("/tickets")

			return data
		},
	})
}
