import { createContext } from "react";

type Theme = "light" | "dark";

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
	theme: "dark",
	setTheme: () => null,
};

export const ThemeProviderContext =
	createContext<ThemeProviderState>(initialState);
