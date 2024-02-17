import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email_or_username: {},
				password: {},
			},
			async authorize(credentials) {
				const res = await axios.post(
					`${process.env.API_BASE_URL}login`,
					credentials
				);
				if (res.status == 200 && res.data) {
					return res.data;
				}

				return null;
			},
		}),
	],
	secret: process.env.JWT_SECRET,
});
export { handler as GET, handler as POST };
