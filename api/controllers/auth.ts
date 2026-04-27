import { api } from "@/lib/config/axios"
import { queryClient } from "@/lib/config/tanstack-query"
import { useMutation, useQuery } from "@tanstack/react-query"
import { GetLoggedUser, Login } from "../models/auth.types"

// Mutations
export const useLogin = () => {
	return useMutation({
		mutationFn: async (credentials: Login.Request) => {
			await api.post("/auth/login", credentials)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user-profile"] })
		},
	})
}

export const useLogout = () => {
	return useMutation({
		mutationFn: async () => {
			await api.post("/auth/logout")
		},
		onSuccess: () => {
			queryClient.invalidateQueries()
		},
	})
}

//Queries
export const useGetLoggedUser = () => {
	return useQuery({
		queryKey: ["user-profile"],
		queryFn: async () => {
			const { data } = await api.get<GetLoggedUser.Response>("/auth/me")
			return data
		},
	})
}
