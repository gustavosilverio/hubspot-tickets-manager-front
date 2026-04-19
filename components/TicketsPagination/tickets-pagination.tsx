"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TicketsPaginationProps {
	currentPage: number
	totalPages: number
	totalItems: number
	pageSize: number
	onPageChange: (page: number) => void
}

export function TicketsPagination({
	currentPage,
	totalPages,
	totalItems,
	pageSize,
	onPageChange,
}: TicketsPaginationProps) {
	const startItem = (currentPage - 1) * pageSize + 1
	const endItem = Math.min(currentPage * pageSize, totalItems)

	const canGoPrevious = currentPage > 1
	const canGoNext = currentPage < totalPages

	if (totalItems === 0) {
		return null
	}

	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<p className="text-sm text-muted-foreground">
				Exibindo{" "}
				<span className="font-medium text-foreground">{startItem}</span>{" "}
				a <span className="font-medium text-foreground">{endItem}</span>{" "}
				de{" "}
				<span className="font-medium text-foreground">
					{totalItems}
				</span>{" "}
				tickets
			</p>

			<div className="flex items-center gap-2">
				<Button
					variant="outline"
					size="sm"
					onClick={() => onPageChange(currentPage - 1)}
					disabled={!canGoPrevious}
				>
					<ChevronLeft className="size-4" />
					Anterior
				</Button>

				<div className="flex items-center gap-1">
					{Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
						let pageNumber: number
						if (totalPages <= 5) {
							pageNumber = i + 1
						} else if (currentPage <= 3) {
							pageNumber = i + 1
						} else if (currentPage >= totalPages - 2) {
							pageNumber = totalPages - 4 + i
						} else {
							pageNumber = currentPage - 2 + i
						}

						return (
							<Button
								key={pageNumber}
								variant={
									currentPage === pageNumber
										? "default"
										: "outline"
								}
								size="sm"
								className="w-9 px-0"
								onClick={() => onPageChange(pageNumber)}
							>
								{pageNumber}
							</Button>
						)
					})}
				</div>

				<Button
					variant="outline"
					size="sm"
					onClick={() => onPageChange(currentPage + 1)}
					disabled={!canGoNext}
				>
					Próximo
					<ChevronRight className="size-4" />
				</Button>
			</div>
		</div>
	)
}
