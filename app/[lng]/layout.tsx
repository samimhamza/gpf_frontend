import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

import { dir } from "i18next";
import { languages } from "../i18n/settings";
// import { SessionProvider } from "next-auth/react";

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
	children,
	params: { lng },
}: {
	children: React.ReactNode;
	params: {
		lng: string;
	};
}) {
	return (
		// <SessionProvider session={session}>
		<html lang={lng} dir={dir(lng)}>
			<body className={inter.className}>{children}</body>
		</html>
		// </SessionProvider>
	);
}
