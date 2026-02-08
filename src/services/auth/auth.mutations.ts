import { useMutation } from "@tanstack/react-query";
import { loginUser, loginWithGoogle } from "./auth.api";

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: loginUser,
	});
};

export const useGoogleLoginMutation = () => {
	return useMutation({
		mutationFn: loginWithGoogle,
	});
};
