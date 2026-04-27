import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDate(dateString: string) {
	try {
		return format(
			new Date(dateString),
			"dd 'de' MMM 'de' yyyy - HH:mm:ss",
			{
				locale: ptBR,
			},
		)
	} catch {
		return dateString
	}
}
