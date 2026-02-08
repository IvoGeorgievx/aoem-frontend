import { Layout } from "@/components/layout/Layout";
import { Route, Routes } from "react-router";
import { publicRoutes } from "./routeConfig";

export default function AppRoutes() {
	return (
		<Routes>
			<Route element={<Layout />} />
			{publicRoutes.map((route) => (
				<Route key={route.path} element={route.element} path={route.path} />
			))}
		</Routes>
	);
}
