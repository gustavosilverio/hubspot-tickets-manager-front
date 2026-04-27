import { useForm } from "react-hook-form"
import { loginSchema } from "./login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useLogin as useLoginMutation } from "@/api/controllers/auth"
import { toast } from "sonner"
import { useState } from "react"

export const useLogin = () => {
	const router = useRouter()

	const [showPassword, setShowPassword] = useState(false)

	const { mutateAsync: loginAsync, isPending: loginIsPending } =
		useLoginMutation()

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = handleSubmit(async (values) => {
		const loginRequest = loginAsync(values).then(() => {
			router.push("/")
		})

		toast.promise(async () => loginRequest, {
			loading: "Verifique suas credenciais..",
			error: () => "Verifique suas credenciais e tente novamente.",
			success: () => {
				return {
					message: "Logado com sucesso!",
				}
			},
		})
	})

	return {
		control,
		onSubmit,
		loginIsPending,
		showPassword,
		setShowPassword,
	}
}
