import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { env } from "@/config/env";
import { useUser } from "@/providers/user/use-user";
import { useLoginMutation } from "@/services/auth/auth.mutations";
import { useGetUser } from "@/services/user/user.queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	email: z.email(),
	password: z
		.string()
		.min(6, "Password must be at least 6 characters")
		.max(64, "Password is too long"),
});

type LoginFormValues = z.infer<typeof schema>;

const Login = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormValues>({
		resolver: zodResolver(schema),
		mode: "onChange",
	});

	const { mutate, isError } = useLoginMutation();
	const { setUser } = useUser();
	const { data: userData, isSuccess: successUserQuery } = useGetUser();

	useEffect(() => {
		if (successUserQuery && userData) {
			setUser(userData);
		}
	}, [successUserQuery, userData, setUser]);

	const onSubmit = (data: LoginFormValues) => {
		mutate(data);
	};

	const handlePasswordVisibility = () => {
		setShowPassword((value) => !value);
	};

	const handleGoogleLogin = () => {
		window.location.href = `${env.API_URL}/auth/google-sign-in`;
	};

	return (
		<div className="flex justify-center items-center h-full w-full">
			<form className="w-1/3" onSubmit={handleSubmit(onSubmit)}>
				<Card>
					<CardHeader>Login</CardHeader>
					<Separator />
					<CardContent>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="Enter email"
									{...register("email")}
								/>
								{errors.email && (
									<p className="text-sm text-red-500">{errors.email.message}</p>
								)}
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<InputGroup>
									<InputGroupInput
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Enter password"
										{...register("password")}
									/>
									<InputGroupAddon
										align="inline-end"
										onClick={handlePasswordVisibility}
										className="cursor-pointer"
									>
										{showPassword ? <EyeOffIcon /> : <EyeIcon />}
									</InputGroupAddon>
								</InputGroup>
								{errors.password && (
									<p className="text-sm text-red-500">
										{errors.password?.message}
									</p>
								)}
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-2">
						<Button type="submit" className="w-full">
							Login
						</Button>
						<Button
							type="button"
							variant="outline"
							className="w-full"
							onClick={handleGoogleLogin}
						>
							Login with Google
						</Button>
						{isError && (
							<p className="text-sm text-red-500">Invalid email or password</p>
						)}
					</CardFooter>
					<Separator />
				</Card>
			</form>
		</div>
	);
};

export default Login;
