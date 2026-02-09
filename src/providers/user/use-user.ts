import { useContext } from "react";
import { UserProviderContext } from "./user-context";

export function useUser() {
	const context = useContext(UserProviderContext);

	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}

	return context;
}
