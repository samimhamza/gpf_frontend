// import { NextResponse } from "next/server";
// import authMiddleware from "./authMiddleware";
// import i18nMiddleware from "./i18nMiddleware";

// // Combine i18n and auth middleware
// export default async function combinedMiddleware(req: any) {
// 	await authMiddleware(req);
// 	await i18nMiddleware(req);
// 	return NextResponse.next();
// }

// // Optionally, don't invoke Middleware on some paths
// export const config = {
// 	matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
// 	// "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"
// 	// "/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"
// };
import { chain } from "@/middlewares/chain";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { i18nMiddleware } from "@/middlewares/i18nMiddleware";

export default chain([authMiddleware, i18nMiddleware]);

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
	// "/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"
	// "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"
};
