"use client"

import { queryClient } from "@/lib/config/tanstack-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const Providers = ({ children }: React.PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools
					position="right"
					buttonPosition="bottom-right"
				/>
			)}
		</QueryClientProvider>
	)
}
