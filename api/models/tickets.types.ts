import { CommonResponse, Enums } from "@/lib/utils/types"

export enum TicketsQueryKeys {
	ObterListaTickets = "ObterListaTickets",
}

// Query
export namespace ObterListaTickets {
	export type TicketProperties = {
		closed_date: string | null
		content: string
		createdate: string
		hs_lastmodifieddate: string
		hs_object_id: string
		hs_pipeline: string
		hs_pipeline_stage: Enums.HubspotTicketPipelineStatus
		hs_ticket_priority: HubspotPriority
		hubspot_owner_id: string
		source_type: string | null
		subject: string
	}

	export type Ticket = {
		id: string
		properties: TicketProperties
		createdAt: string
		updatedAt: string
		archived: boolean
		url: string
	}

	export type Response = CommonResponse<Ticket[]>
}

export type HubspotPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT"
