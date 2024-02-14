"use client";

import { Poppins } from "next/font/google";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

interface HeaderProps {
	label: string;
}

export const Header = ({ label }: HeaderProps) => {
	return (
		<div className="w-full flex flex-col gap-y-3 items-center justify-center">
			<img className="mx-auto w-28 h-28" src="./public/favicon.ico" />

			<p className="text-muted-foreground text-sm ">{label}</p>
		</div>
	);
};
