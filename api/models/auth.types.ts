import { CommonResponse } from "@/lib/utils/types"

export enum AuthQueryKeys {
	GetLoggedUser = "GetLoggedUser",
}

// Mutations
export namespace Login {
	export type Request = {
		email: string
		password: string
	}
}

// Queries
export namespace GetLoggedUser {
	export type Response = CommonResponse<{
		sub: number
		email: string
	}>
}
