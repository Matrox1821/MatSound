import spotifyApi, {LOGIN_URL} from "@/lib/spotify";
import {NextAuthOptions} from "next-auth";
import SotifyProvider from "next-auth/providers/spotify";
async function refreshAccessToken(token: any) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const {body: refreshedToken} = await spotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    SotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || "",
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({token, account, user}: any) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };
      }
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
      return await refreshAccessToken(token);
    },
    async session({session, token}: any) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;
      return session;
    },
  },
};
