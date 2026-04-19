export interface Ticket {
	id: string
	subject: string
	content?: string
	status: TicketStatus
	priority?: TicketPriority
	createdAt: string
	updatedAt?: string
	ownerId?: string
	ownerName?: string
}

export type TicketStatus = "NEW" | "WAITING" | "IN_PROGRESS" | "CLOSED"

export type TicketPriority = "LOW" | "MEDIUM" | "HIGH"
