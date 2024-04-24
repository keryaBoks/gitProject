import { useQuery } from "@tanstack/react-query";

export interface UserData {
	avatar_url: string;
	name: string;
	login: string;
	followers: number;
	following: number;
	html_url: string;
}

export function useUserData(
	username: string,
	setIsNotFoundUser: (value: boolean) => void
) {
	const token = "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";

	return useQuery<UserData>({
		queryKey: ["userData", username],
		queryFn: async () => {
			const response = await fetch(`https://api.github.com/users/${username}`, {
				headers: {
					Authorization: `token ${token}`,
					Accept: "application/json",
				},
			});
			if (!response.ok) {
				if (response.status === 404) {
					setIsNotFoundUser(true);
				}
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
	});
}
