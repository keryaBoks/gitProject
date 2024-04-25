import create from "zustand";
import { UserNameState } from "../types/useUserNameStoreTypes";

export const useUserNameStore = create<UserNameState>((set) => ({
	userName: "",
	setUserName: (userName) => {
		set({ userName });
	},
}));
