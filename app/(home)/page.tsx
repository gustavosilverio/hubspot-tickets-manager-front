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
import { useHome } from "./home.hook"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Home() {
	const { search, setSearch, tickets, ticketsIsLoading } = useHome()

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
						<div className="border-red-500 relative flex-1 max-w-sm">
							<Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
							<Input
								placeholder="Buscar por título..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="pl-9 pr-9"
							/>
						</div>

						<TicketsTable
							data={tickets}
							isLoading={ticketsIsLoading}
						/>
					</CardContent>
				</Card>
			</main>
		</div>
	)
}
