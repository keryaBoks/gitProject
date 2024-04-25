import create from "zustand";
import { UserNotFoundStoreTypes } from "../types/UserNotFoundUserTypes";

export const UserNotFountUserStore = create<UserNotFoundStoreTypes>((set) => ({
	isNotFoundUser: false,
	setIsNotFoundUser: (isNotFoundUser: boolean) => {
		set({ isNotFoundUser });
	},
}));
