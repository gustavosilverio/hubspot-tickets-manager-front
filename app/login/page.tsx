"use client"

import { Container } from "@/components/Container"
import { useLogin } from "./login.hook"
import { Input } from "@/components/Input"
import { Button } from "@/components/ui/button"

export default function Login() {
	const { control, onSubmit } = useLogin()

	return (
		<Container.Centralized>
			<form
				onSubmit={onSubmit}
				className="max-w-112.5 w-full flex flex-col gap-2"
			>
				<h1>Login</h1>
				<Input.Controlado
					control={control}
					name="email"
					placeholder="E-mail"
				/>

				<Input.Controlado
					control={control}
					name="password"
					placeholder="Password"
				/>

				<Button type="submit">Submit</Button>
			</form>
		</Container.Centralized>
	)
}
