export const api = async (url: string, options?: RequestInit) => {
	const res = await fetch(url, { credentials: "include", ...options });
	if (!res.ok) throw new Error("API error");
	return res.json();
};
