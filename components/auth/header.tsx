"use client";

import Image from "next/image";

interface HeaderProps {
	label: string;
}

export const Header = ({ label }: HeaderProps) => {
	return (
		<div className="w-full flex flex-col gap-y-3 items-center justify-center">
			<Image
				className="mx-auto w-28 h-28"
				src="/images/favicon.png"
				alt="logo"
			/>
			<p className="text-muted-foreground text-sm ">{label}</p>
		</div>
	);
};
