import AppRoutes from "@/routes/AppRouter";
import { Header } from "./Header/Header";

const nav = [
	{ label: "Login", href: "sign-in" },
	{ label: "Test1", href: "Test1" },
	{ label: "Test2", href: "Test2" },
];

export function Layout() {
	return (
		<div className="flex flex-col h-screen">
			<Header logo={"Expense App"} nav={nav} />
			<AppRoutes />
		</div>
	);
}
