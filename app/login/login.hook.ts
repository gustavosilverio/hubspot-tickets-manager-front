import { useForm } from "react-hook-form"
import { loginSchema } from "./login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { redirect } from "next/navigation"

export const useLogin = () => {
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = handleSubmit((values) => {
		console.log(values)
		redirect("/")
	})

	return {
		control,
		onSubmit,
	}
}
