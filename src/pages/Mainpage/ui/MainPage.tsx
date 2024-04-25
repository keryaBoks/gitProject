import { WarningComponent } from "src/widgets/WarningComponent/WarningComponent";
import { ReactComponent as SearchIcon } from "src/icons/warnings/search-icon.svg";
import { ReactComponent as UserIcon } from "src/icons/warnings/user-icon.svg"
import { MainUserProfile } from "src/features/MainUserProfile";
import { ReposList } from "src/features/ReposList";
import { useUserNameStore } from "src/widgets/Header/model";
import { UserNotFountUserStore } from "../model/slice/UserNotFoundUserStore";
import styles from "./MainPage.module.css";

export const MainPage = () => {
    const { userName } = useUserNameStore()
    const { isNotFoundUser } = UserNotFountUserStore()
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
