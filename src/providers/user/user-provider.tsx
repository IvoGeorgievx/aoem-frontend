import type { User } from "@/shared/types/user-type";
import { useState } from "react";
import { UserProviderContext } from "./user-context";

type UserProviderProps = {
	children: React.ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
	const [user, setUser] = useState<User | null>(null);

	return (
		<UserProviderContext.Provider value={{ user, setUser }}>
			{children}
		</UserProviderContext.Provider>
	);
}
