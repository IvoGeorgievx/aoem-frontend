import { api } from "@/api/client";
import { env } from "@/config/env";

interface LoginPayload {
	email: string;
	password: string;
}

export const loginUser = async (data: LoginPayload) => {
	return api(`${env.API_URL}/auth/sign-in`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
};

export const loginWithGoogle = () => api(`${env.API_URL}/auth/google-sign-in`);
