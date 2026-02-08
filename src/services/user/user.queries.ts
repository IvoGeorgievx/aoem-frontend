import { useQuery } from "@tanstack/react-query";
import { getUserData } from "./user.api";

export const useGetUser = () => {
	return useQuery({
		queryKey: ["user"],
		queryFn: () => {
			const token = localStorage.getItem("accessToken");
			if (!token) throw new Error("No token provided.");
			return getUserData(token);
		},
		enabled: !!localStorage.getItem("accessToken"),
	});
};
