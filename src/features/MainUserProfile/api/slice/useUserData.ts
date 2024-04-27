import { useQuery } from "@tanstack/react-query";
import { UserDataTypes } from "../types/UserDataTypes";
import { fetchData } from "@shared/api/defaultFetch";

export function useUserData(
	username: string,
	setIsNotFoundUser: (value: boolean) => void
) {
	return useQuery<UserDataTypes>({
		queryKey: ["userData", username],
		queryFn: async () => {
			const response = await fetchData(
				`${process.env.REACT_APP_BASE_URL}/users/${username}`
			);
			if (response.status === 404) {
				setIsNotFoundUser(true);
			}

			return response.json();
		},
	});
}
