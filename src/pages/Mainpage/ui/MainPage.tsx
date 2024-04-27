import { WarningComponent } from "@widgets/WarningComponent/WarningComponent";
import { ReactComponent as SearchIcon } from "@icons/warnings/search-icon.svg";
import { ReactComponent as UserIcon } from "@icons/warnings/user-icon.svg"
import { MainUserProfile } from "@features/MainUserProfile";
import { ReposList } from "@features/ReposList";
import { useUserNameStore } from "@widgets/Header/model";
import { userNotFountUserStore } from "@pages/Mainpage/model/slice/UserNotFoundUserStore";
import styles from "./MainPage.module.css";

export const MainPage = () => {
    const { userName } = useUserNameStore()
    const { isNotFoundUser } = userNotFountUserStore()
    const componentsMap = {
        notFoundUser: <WarningComponent icon={<UserIcon />} text="User not found" />,
        emptyUserName: <WarningComponent text="Start with searching a GitHub user" icon={<SearchIcon />} />,
        default: (
            <div className={styles.container}>
                <MainUserProfile />
                <ReposList />
            </div>
        )
    };

    const componentToShow =
        componentsMap[isNotFoundUser ? 'notFoundUser' : (userName === '' ? 'emptyUserName' : 'default')];

    return componentToShow;
}
