export type CommonResponse<T> = {
	data: T
}

export namespace Enums {
	export enum HubspotTicketPipelineStatus {
		NOVO = "1",
		TRIAGEM = "1338982438",
		AGUARDANDO_CLIENTE = "3",
		EM_ATENDIMENTO = "2",
		RESOLVIDO = "206656385",
		FECHADO = "4",
	}
}
