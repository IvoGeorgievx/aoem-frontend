import type { User } from "@/shared/types/user-type";
import { createContext } from "react";

type UserProviderState = {
	user: User | null;
	setUser: (user: User | null) => void;
};

export const UserProviderContext = createContext<UserProviderState | undefined>(
	undefined,
);
