import { useForm } from "react-hook-form"
import { loginSchema } from "./login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

export const useLogin = () => {
	const router = useRouter()

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = handleSubmit((values) => {
		console.log(values)
		router.push("/")
	})

	return {
		control,
		onSubmit,
	}
}
