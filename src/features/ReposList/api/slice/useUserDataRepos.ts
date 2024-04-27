import { useQuery } from "@tanstack/react-query";
import { UserDataReposTypes } from "../types/UserDataReposTypes";
import { fetchData } from "@shared/api/defaultFetch";

export function useUserDataRepos(username: string) {
	return useQuery<UserDataReposTypes[]>({
		queryKey: ["userDataRepos", username],
		queryFn: async () => {
			const response = await fetchData(
				`${process.env.REACT_APP_BASE_URL}/users/${username}/repos`
			);
			return response.json();
		},
	});
}
