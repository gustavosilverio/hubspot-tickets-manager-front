"use client"

import { Header } from "@/components/Header/header"
import {
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	Card,
} from "@/components/ui/card"
import { TicketsTable } from "@/components/TicketsTable/ticketsTable"
import { TicketsFilters } from "@/components/TicketsFilters/tickets-filters"
import { useHome } from "./home.hook"

export default function Home() {
	const {
		page,
		search,
		setPage,
		setSearch,
		setStatus,
		status,
		tickets,
		ticketsIsLoading,
	} = useHome()

	return (
		<div className="min-h-screen bg-background">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<Card>
					<CardHeader>
						<CardTitle>Tickets</CardTitle>
						<CardDescription>
							Gerencie e acompanhe todos os seus tickets do
							HubSpot
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-6">
						<TicketsFilters
							search={search}
							onSearchChange={setSearch}
							status={status}
							onStatusChange={setStatus}
						/>

						<TicketsTable
							data={tickets?.data || []}
							isLoading={ticketsIsLoading}
						/>

						{/* <TicketsPagination
							currentPage={page}
							totalPages={totalPages}
							totalItems={total}
							pageSize={PAGE_SIZE}
							onPageChange={setPage}
						/> */}
					</CardContent>
				</Card>
			</main>
		</div>
	)
}
