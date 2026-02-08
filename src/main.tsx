import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { queryClient } from "./lib/queryClient.ts";
import { ThemeProvider } from "./providers/theme/theme-provider.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider storageKey="vite-ui-theme">
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
);
