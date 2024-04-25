import { useQuery } from "@tanstack/react-query";
import { UserDataReposTypes } from "../types/UserDataReposTypes";

export function useUserDataRepos(username: string) {
	const token = "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";

	return useQuery<UserDataReposTypes[]>({
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
