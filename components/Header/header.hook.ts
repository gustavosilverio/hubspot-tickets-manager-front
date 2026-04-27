import { useLogout } from "@/api/controllers/auth"
import { useAuth } from "@/hooks/auth"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useHeader = () => {
	const { user } = useAuth()

	const router = useRouter()

	const { mutateAsync: logoutAsync } = useLogout()

	const handleLogout = () => {
		logoutAsync().then(() => {
			toast.info("Deslogado.", {
				description: "Faça o login novamente para acessar a plataforma",
			})

			router.push("/login")
		})
	}

	return {
		user: user?.data,
		handleLogout,
	}
}
