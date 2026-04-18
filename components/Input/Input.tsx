"use client"

import { Controller, FieldValues } from "react-hook-form"
import { ControladoInputProps } from "./Input.types"
import { useId } from "react"
import { Label } from "../ui/label"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { ConditionalTransition } from "../ConditionalTransition"

export const Controlado = <TFieldValues extends FieldValues>({
	label,
	control,
	name,
	startAdornment,
	endAdornment,
	...props
}: ControladoInputProps<TFieldValues>) => {
	const id = useId()

	return (
		<div className="flex flex-col gap-2 w-full">
			{label && <Label htmlFor={id}>{label}</Label>}

			<Controller
				control={control}
				name={name}
				render={({ field, fieldState: { error } }) => (
					<div className="relative flex flex-col gap-1">
						<InputGroup>
							{startAdornment && (
								<InputGroupAddon align="inline-start">
									{startAdornment}
								</InputGroupAddon>
							)}

							<InputGroupInput id={id} {...props} {...field} />

							{endAdornment && (
								<InputGroupAddon align="inline-end">
									{endAdornment}
								</InputGroupAddon>
							)}
						</InputGroup>

						<ConditionalTransition condition={!!error?.message}>
							<p className="text-sm text-red-500">
								{error?.message}
							</p>
						</ConditionalTransition>
					</div>
				)}
			/>
		</div>
	)
}
