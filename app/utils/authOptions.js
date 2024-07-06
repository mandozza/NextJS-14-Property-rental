import connectDB from '@/config/database';
import User from '@/models/User';

import GooogleProvider from 'next-auth/providers/google';

export const authOptions = {
	providers: [
		GooogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
	],
	callbacks: {
		// Invoked on sucessful signin
		async signIn({ profile }) {
			await connectDB();
			const userExists = await User.findOne({ email: profile.email });
			if (!userExists) {
				//Truncate username if to long
				const username = profile.name.slice(0, 20);

				await User.create({
					email: profile.email,
					username,
					image: profile.picture,
				});
			}

			return true;
		},
		// Modifies the session object
		async session({ session }) {
			const user = await User.findOne({ email: session.user.email });
			session.user.id = user._id.toString();
			return session;
		},
	},
};
