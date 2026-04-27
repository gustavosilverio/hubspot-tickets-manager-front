import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
	const token = request.cookies.get("hs_tickets_manager_access_token")

	const { pathname } = request.nextUrl

	if (token && pathname === "/login") {
		return NextResponse.redirect(new URL("/", request.url))
	}

	if (!token && pathname !== "/login") {
		return NextResponse.redirect(new URL("/login", request.url))
	}

	return NextResponse.next()
}

export const config = {
	// Aplica o middleware em todas as rotas, exceto arquivos estáticos e API
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
