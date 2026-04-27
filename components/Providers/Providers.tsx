"use client"

import { queryClient } from "@/lib/config/tanstack-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "sonner"

export const Providers = ({ children }: React.PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}

			<Toaster />

			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools
					position="right"
					buttonPosition="bottom-right"
				/>
			)}
		</QueryClientProvider>
	)
}
