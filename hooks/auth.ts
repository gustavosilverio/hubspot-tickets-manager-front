import { useGetLoggedUser } from "@/api/controllers/auth"

export const useAuth = () => {
	const { data: user } = useGetLoggedUser()

	return {
		user,
	}
}
