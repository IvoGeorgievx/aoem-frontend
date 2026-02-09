import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { queryClient } from "./lib/queryClient.ts";
import { ThemeProvider } from "./providers/theme/theme-provider.tsx";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./providers/user/user-provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider storageKey="vite-ui-theme">
			<UserProvider>
				<BrowserRouter>
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
				</BrowserRouter>
			</UserProvider>
		</ThemeProvider>
	</StrictMode>,
);
