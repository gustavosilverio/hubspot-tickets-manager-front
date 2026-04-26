import { Enums } from "@/lib/utils/types"

export type TicketsFiltersProps = {
	search: string
	onSearchChange: (value: string) => void
	status: Enums.HubspotTicketPipelineStatus
	onStatusChange: (value: Enums.HubspotTicketPipelineStatus) => void
}
