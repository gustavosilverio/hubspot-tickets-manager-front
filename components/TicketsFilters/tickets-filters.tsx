"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { TicketsFiltersProps } from "./tickets-filters.types"
import { Enums } from "@/lib/utils/types"
import { statusOptions } from "./tickets-filters.utils"

export function TicketsFilters({
	search,
	onSearchChange,
	status,
	onStatusChange,
}: TicketsFiltersProps) {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
			<div className="border-red-500 relative flex-1 max-w-sm">
				<Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
				<Input
					placeholder="Buscar por nome..."
					value={search}
					onChange={(e) => onSearchChange(e.target.value)}
					className="pl-9 pr-9"
				/>
				{search && (
					<Button
						variant="ghost"
						size="icon-sm"
						className="absolute right-1 top-1/2 -translate-y-1/2 size-6"
						onClick={() => onSearchChange("")}
					>
						<X className="size-3" />
						<span className="sr-only">Limpar busca</span>
					</Button>
				)}
			</div>

			<Select
				value={status}
				onValueChange={(value) =>
					onStatusChange(
						value as
							| Enums.HubspotTicketPipelineStatus
							| Enums.HubspotTicketPipelineStatus.NOVO,
					)
				}
			>
				<SelectTrigger className="w-full sm:w-[180px]">
					<SelectValue placeholder="Filtrar por status" />
				</SelectTrigger>
				<SelectContent>
					{statusOptions.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
