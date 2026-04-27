"use client"

import { Container } from "@/components/Container"
import { useLogin } from "./login.hook"
import { Input } from "@/components/Input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"

export default function Login() {
	const { control, onSubmit, loginIsPending, setShowPassword, showPassword } =
		useLogin()

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
					type="email"
				/>

				<div className="relative w-full">
					<Input.Controlado
						control={control}
						name="password"
						placeholder="Senha"
						type={showPassword ? "text" : "password"}
					/>

					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
						aria-label={
							showPassword ? "Ocultar senha" : "Mostrar senha"
						}
					>
						{showPassword ? (
							<EyeOff className="h-5 w-5" />
						) : (
							<Eye className="h-5 w-5" />
						)}
					</button>
				</div>

				<Button type="submit" disabled={loginIsPending}>
					Entrar
				</Button>
			</form>
		</Container.Centralized>
	)
}
