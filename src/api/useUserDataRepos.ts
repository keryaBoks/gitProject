import { useQuery } from "@tanstack/react-query";

export interface UserDataRepos {
	name: string;
	description: string | null;
	html_url: string;
}

export function useUserDataRepos(username: string) {
	const token = "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";

	return useQuery<UserDataRepos[]>({
		queryKey: ["userDataRepos", username],
		queryFn: async () => {
			const response = await fetch(
				`https://api.github.com/users/${username}/repos`,
				{
					headers: {
						Authorization: `token ${token}`,
						Accept: "application/json",
					},
				}
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
	});
}
