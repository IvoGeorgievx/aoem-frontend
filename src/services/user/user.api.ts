import { api } from "@/api/client";
import { env } from "@/config/env";

export const getUserData = async (accessToken: string) =>
	api(`${env.API_URL}/user/me`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
