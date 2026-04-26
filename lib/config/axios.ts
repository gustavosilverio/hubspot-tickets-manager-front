import axios from "axios"

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

api.defaults.headers.common["Authorization"] =
	`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiZ3VzdGF2b3NrMjkwOTA1QGdtYWlsLmNvbSIsImlhdCI6MTc3NzAwMjgyMywiZXhwIjoxNzc3MDA2NDIzfQ.ajS4p3q4oLgvDYdCZT0bXRPF5VgMc4fOAAz9_QosV_w`
