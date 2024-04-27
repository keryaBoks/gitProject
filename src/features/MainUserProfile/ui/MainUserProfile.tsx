import { UserDataTypes, useUserData } from "../api";
import { useUserNameStore } from "@widgets/Header/model";
import { userNotFountUserStore } from "@pages/Mainpage";
import styles from "./MainUserProfile.module.css";
import { Loader } from "@widgets/Loader";


export const MainUserProfile = () => {

  const { setIsNotFoundUser } = userNotFountUserStore()
  const { userName } = useUserNameStore();

  const { isLoading, data } = useUserData(userName, setIsNotFoundUser);

  if (isLoading) return <Loader/>;

  const { avatar_url, name, login, followers, following, html_url } = data as UserDataTypes;

  return (
    <div className={styles.container}>
      <img className={styles.img} src={avatar_url} alt="avatar" />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.login}>
          <a className={styles.link} href={html_url} target="_blank" rel="noreferrer">
            {login}
          </a>
        </div>
      </div>
      <div className={styles.info}>
        <div>{followers} followers</div>
        <div>{following} following</div>
      </div>
    </div>
  );
};

