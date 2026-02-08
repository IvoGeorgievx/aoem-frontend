import { Home } from "@/components/layout/Home/Home";
import Login from "@/components/layout/Login/Login";
import Register from "@/components/layout/Register/Register";

interface AppRoute {
	path: string;
	element: React.ReactNode;
}

export const publicRoutes: AppRoute[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/sign-up",
		element: <Register />,
	},
	{
		path: "/sign-in",
		element: <Login />,
	},
];
