import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser, loginWithGoogle } from "./auth.api";

export const useLoginMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: loginUser,
		onSuccess: (data) => {
			localStorage.setItem("accessToken", data?.accessToken);
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});
};

export const useGoogleLoginMutation = () => {
	return useMutation({
		mutationFn: loginWithGoogle,
	});
};
