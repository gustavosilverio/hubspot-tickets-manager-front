"use client"

import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Enums } from "@/lib/utils/types"
import { TicketsTableProps } from "./ticketsTable.types"
import { statusConfig } from "./ticketsTable.utils"

function formatDate(dateString: string) {
	try {
		return format(new Date(dateString), "dd 'de' MMM 'de' yyyy", {
			locale: ptBR,
		})
	} catch {
		return dateString
	}
}

function TicketsTableSkeleton() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">ID</TableHead>
					<TableHead>Assunto</TableHead>
					<TableHead className="w-[140px]">Status</TableHead>
					<TableHead className="w-[160px]">Criado em</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{Array.from({ length: 5 }).map((_, i) => (
					<TableRow key={i}>
						<TableCell>
							<Skeleton className="h-4 w-16" />
						</TableCell>
						<TableCell>
							<Skeleton className="h-4 w-full max-w-[300px]" />
						</TableCell>
						<TableCell>
							<Skeleton className="h-5 w-24" />
						</TableCell>
						<TableCell>
							<Skeleton className="h-4 w-28" />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

function EmptyState() {
	return (
		<div className="flex flex-col items-center justify-center py-12 text-center">
			<div className="rounded-full bg-muted p-4 mb-4">
				<svg
					className="size-8 text-muted-foreground"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.5}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z"
					/>
				</svg>
			</div>
			<h3 className="text-lg font-medium">Nenhum ticket encontrado</h3>
			<p className="text-muted-foreground mt-1">
				Tente ajustar os filtros ou realizar uma nova busca.
			</p>
		</div>
	)
}

export function TicketsTable({ data, isLoading }: TicketsTableProps) {
	if (isLoading) {
		return <TicketsTableSkeleton />
	}

	if (data.length === 0) {
		return <EmptyState />
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">ID</TableHead>
					<TableHead>Assunto</TableHead>
					<TableHead className="w-[140px]">Status</TableHead>
					<TableHead className="w-[160px]">Criado em</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((ticket) => {
					const status =
						statusConfig[ticket.properties.hs_pipeline_stage] ||
						statusConfig[Enums.HubspotTicketPipelineStatus.NOVO]
					return (
						<TableRow key={ticket.id}>
							<TableCell className="font-mono text-xs text-muted-foreground">
								#{ticket.id.slice(0, 8)}
							</TableCell>
							<TableCell className="font-medium">
								{ticket.properties.subject}
							</TableCell>
							<TableCell>
								<Badge variant={status.variant}>
									{status.label}
								</Badge>
							</TableCell>
							<TableCell className="text-muted-foreground">
								{formatDate(ticket.createdAt)}
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}
