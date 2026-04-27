"use client"

import { LogOut, User as UserIcon, Ticket } from "lucide-react"
// import { useAuth } from '@/contexts/auth-context'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useHeader } from "./header.hook"

export function Header() {
	const { user, handleLogout } = useHeader()

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="flex h-14 items-center justify-between px-6">
				<div className="flex items-center gap-2">
					<Ticket className="size-5 text-primary" />
					<span className="text-lg font-semibold">
						HubSpot Tickets
					</span>
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="relative h-9 w-9 rounded-full"
						>
							<Avatar className="size-9">
								<AvatarFallback className="bg-primary text-primary-foreground">
									<UserIcon className="size-4" />
								</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-56"
						align="end"
						forceMount
					>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col gap-1">
								<p className="text-sm font-medium leading-none">
									Usuário
								</p>
								<p className="text-xs leading-none text-muted-foreground">
									{user?.email}
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={handleLogout}
							className="cursor-pointer text-destructive focus:text-destructive"
						>
							<LogOut className="mr-2 size-4" />
							<span>Sair</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	)
}
