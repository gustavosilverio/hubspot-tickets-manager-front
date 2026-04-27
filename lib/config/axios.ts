import axios, { AxiosError } from "axios"

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3031",
	withCredentials: true,
})

let isRefreshing = false
let failedQueue: {
	resolve: () => void
	reject: (reason?: AxiosError | Error) => void
}[] = []

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config

		if (!originalRequest) return Promise.reject(error)

		if (
			error.response?.status === 401 &&
			!originalRequest._retry &&
			originalRequest.url !== "/auth/login" &&
			originalRequest.url !== "/auth/refresh" &&
			originalRequest.url !== "/auth/logout"
		) {
			if (isRefreshing) {
				return new Promise(function (resolve, reject) {
					failedQueue.push({
						resolve: () => resolve(api(originalRequest)),
						reject: (error) => reject(error),
					})
				})
			}

			originalRequest._retry = true
			isRefreshing = true

			try {
				await api.post("/auth/refresh")

				isRefreshing = false

				failedQueue.forEach((prom) => prom.resolve())
				failedQueue = []

				return api(originalRequest)
			} catch {
				isRefreshing = false

				await api
					.post("/auth/logout")
					.catch(() => console.error("erro ao forçar logout"))

				failedQueue.forEach((prom) => prom.reject())
				failedQueue = []

				if (
					typeof window !== "undefined" &&
					window.location.pathname !== "/login"
				)
					window.location.href = "/login"

				return Promise.reject(error)
			}
		}

		return Promise.reject(error)
	},
)
