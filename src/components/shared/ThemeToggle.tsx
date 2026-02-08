import { useTheme } from "@/providers/theme/use-theme";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";

export const ToggleTheme = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			aria-label="Toggle theme"
			style={{
				cursor: "pointer",
			}}
		>
			{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
		</Button>
	);
};
