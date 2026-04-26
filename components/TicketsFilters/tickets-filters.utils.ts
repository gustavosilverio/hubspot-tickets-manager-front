import { Enums } from "@/lib/utils/types"

export const statusOptions: {
	value: Enums.HubspotTicketPipelineStatus
	label: string
}[] = [
	{
		value: Enums.HubspotTicketPipelineStatus.NOVO,
		label: "Novo",
	},
	{
		value: Enums.HubspotTicketPipelineStatus.TRIAGEM,
		label: "Triagem",
	},
	{
		value: Enums.HubspotTicketPipelineStatus.AGUARDANDO_CLIENTE,
		label: "Aguardando cliente",
	},
	{
		value: Enums.HubspotTicketPipelineStatus.EM_ATENDIMENTO,
		label: "Em atendimento",
	},
	{
		value: Enums.HubspotTicketPipelineStatus.FECHADO,
		label: "Fechado",
	},
	{
		value: Enums.HubspotTicketPipelineStatus.RESOLVIDO,
		label: "Resolvido",
	},
]
