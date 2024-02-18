// authMiddleware.js
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import {
	DEFAULT_LOGIN_REDIRECT,
	apiAuthPrefix,
	authRoutes,
	publicRoutes,
} from "@/routes";
import { CustomMiddleware } from "./chain";

export function authMiddleware(middleware: CustomMiddleware) {
	return async (request: NextRequest, event: NextFetchEvent) => {
		const response = NextResponse.next();

		const { nextUrl } = request;
		const isLoggedIn = !!request.auth;

		const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
		const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
		const isAuthRoute = authRoutes.includes(nextUrl.pathname);

		if (isApiAuthRoute) {
			return middleware(request, event, response);
		}

		if (isAuthRoute) {
			if (isLoggedIn) {
				// return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
			}
			return middleware(request, event, response);
		}

		if (!isLoggedIn && !isPublicRoute) {
			let callbackUrl = nextUrl.pathname;
			if (nextUrl.search) {
				callbackUrl += nextUrl.search;
			}

			const encodedCallbackUrl = encodeURIComponent(callbackUrl);

			// return NextResponse.redirect(
			// 	new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
			// );
		}

		return middleware(request, event, response);
	};
}
