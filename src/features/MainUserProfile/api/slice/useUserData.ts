import { useQuery } from "@tanstack/react-query";
import { UserDataTypes } from "../types/UserDataTypes";

export function useUserData(
	username: string,
	setIsNotFoundUser: (value: boolean) => void
) {
	const token = "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";

	return useQuery<UserDataTypes>({
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
