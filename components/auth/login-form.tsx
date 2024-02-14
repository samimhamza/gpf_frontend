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
import { FormSuccess } from "../form-success";
import { useTranslation } from "@/app/i18n/client";
// import { login } from "@/actions/login";

export const LoginForm = ({ lng }: { lng: string }) => {
	const { t } = useTranslation(lng);
	const formSchema = LoginSchema(t);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email_or_username: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// login(values);
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
										<Input {...field} type="password" placeholder="*******" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message="" />
					<FormSuccess message="" />
					<Button type="submit" className="w-full">
						{t("login")}
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
