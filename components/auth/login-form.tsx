"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { CardWrapper } from "./card-wrapper";
import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { useTranslation } from "@/app/i18n/client";
import { signIn } from "next-auth/react";
import { useState, useTransition } from "react";
import { redirect } from "next/navigation";
// import { login } from "@/actions/login";

export const LoginForm = ({ lng }: { lng: string }) => {
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const { t } = useTranslation(lng);
	const formSchema = LoginSchema(t);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email_or_username: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setError("");
		startTransition(async () => {
			const res = await signIn("credentials", {
				email_or_username: values.email_or_username,
				password: values.password,
				redirect: false,
			});

			if (!res?.error) {
				redirect("/dashboard");
			}
			setError(t("invalid_credentials"));
		});
	};

	return (
		<CardWrapper headerLabel={t("welcome_back")}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email_or_username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("email_or_username")}</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder={t("enter_email_or_username")}
											disabled={isPending}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("password")}</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="password"
											placeholder="*******"
											disabled={isPending}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error} />
					<Button type="submit" className="w-full" disabled={isPending}>
						{t("login")}
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
