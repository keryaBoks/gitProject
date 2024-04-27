import create from "zustand";
import { UserNotFoundStoreTypes } from "../types/UserNotFoundUserTypes";

export const userNotFountUserStore = create<UserNotFoundStoreTypes>((set) => ({
	isNotFoundUser: false,
	setIsNotFoundUser: (isNotFoundUser: boolean) => {
		set({ isNotFoundUser });
	},
}));
