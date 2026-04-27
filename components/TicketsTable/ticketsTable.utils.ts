import { HubspotPriority } from "@/api/models/tickets.types"
import { Enums } from "@/lib/utils/types"

export const statusConfig: Record<
	Enums.HubspotTicketPipelineStatus,
	{
		label: string
		variant:
			| "default"
			| "destructive"
			| "ghost"
			| "link"
			| "outline"
			| "secondary"
	}
> = {
	[Enums.HubspotTicketPipelineStatus.NOVO]: {
		label: "Novo",
		variant: "default",
	},
	[Enums.HubspotTicketPipelineStatus.TRIAGEM]: {
		label: "Triagem",
		variant: "outline",
	},
	[Enums.HubspotTicketPipelineStatus.AGUARDANDO_CLIENTE]: {
		label: "Aguardando cliente",
		variant: "outline",
	},
	[Enums.HubspotTicketPipelineStatus.EM_ATENDIMENTO]: {
		label: "Em atendimento",
		variant: "outline",
	},
	[Enums.HubspotTicketPipelineStatus.FECHADO]: {
		label: "Fechado",
		variant: "secondary",
	},
	[Enums.HubspotTicketPipelineStatus.RESOLVIDO]: {
		label: "Resolvido",
		variant: "secondary",
	},
}

export const priorityConfig: Record<
	HubspotPriority,
	{
		label: string
		variant:
			| "default"
			| "destructive"
			| "ghost"
			| "link"
			| "outline"
			| "secondary"
	}
> = {
	URGENT: {
		label: "Urgente",
		variant: "destructive",
	},
	HIGH: {
		label: "Alta",
		variant: "destructive",
	},
	MEDIUM: {
		label: "Média",
		variant: "default",
	},
	LOW: {
		label: "Baixa",
		variant: "outline",
	},
}
