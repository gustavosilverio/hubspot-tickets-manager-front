import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const delayResponse = async (ms = 1500) => {
	await new Promise((resolve) => setTimeout(resolve, ms))
}
