import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
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
	// callbacks: {
	// 	async jwt({ token, user }) {
	// 		console.log(token, user);

	// 		if (user) {
	// 			return {
	// 				token: user.token,
	// 				user: user.user,
	// 				permissions: user.permissions,
	// 				roles: user.roles,
	// 			};
	// 		}
	// 		return token;
	// 	},

	// 	async session({ session, token }) {
	// 		session.token = token.token;
	// 		session.user = token.user;
	// 		session.permissions = token.permissions;
	// 		return Promise.resolve(session);
	// 	},
	// },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
