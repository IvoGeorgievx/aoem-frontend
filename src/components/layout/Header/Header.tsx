import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/shared/ThemeToggle";
import { useLoginMutation } from "@/services/auth/auth.mutations";
import { Spinner } from "@/components/ui/spinner";

interface NavItem {
	href: string;
	label: string;
}

interface HeaderProps {
	logo: React.ReactNode;
	nav: NavItem[];
}

export const Header = ({ logo, nav }: HeaderProps) => {
	const { mutate, isPending } = useLoginMutation();
	return (
		<header className="border-b">
			<div className="flex justify-between mx-auto h-16 px-4 container">
				<div className="flex justify-center items-center">{logo}</div>
				<nav className="hidden md:flex items-center gap-6">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{item.label}
						</a>
					))}
					<ToggleTheme />
					<Button
						onClick={() =>
							mutate({
								email: "test3@ivo.bg",
								password: "strongPass123",
							})
						}
						disabled={isPending}
					>
						{isPending && <Spinner className="mr-2" />}
						Sign in
					</Button>
				</nav>
			</div>
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon">
							<Menu />
						</Button>
					</SheetTrigger>

					<SheetContent side="right">
						<nav className="flex flex-col gap-4 mt-6">
							<ToggleTheme />
							{nav.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="text-sm font-medium"
								>
									{item.label}
								</a>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};
