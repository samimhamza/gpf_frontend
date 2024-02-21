"use client";

import { Center, Card, Flex, Box } from "@mantine/core";
// import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	backButtonHref?: string;
	backButtonLabel?: string;
}

export const CardWrapper = ({
	children,
	headerLabel,
	backButtonHref,
	backButtonLabel,
}: CardWrapperProps) => {
	return (
		<Flex align="center" justify="center">
			<Card shadow="sm" padding="lg" radius="md" withBorder>
				<Center>
					<Header label={headerLabel} />
				</Center>
				{children}
				{backButtonHref && backButtonLabel && (
					<BackButton label={backButtonLabel} href={backButtonHref} />
				)}
			</Card>
		</Flex>
	);
};
