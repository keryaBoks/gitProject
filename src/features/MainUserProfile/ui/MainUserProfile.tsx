/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */;
import { UserDataTypes, useUserData } from "../api";
import { useUserNameStore } from "src/widgets/Header/model";
import { UserNotFountUserStore } from "src/pages/Mainpage";
import styles from "./MainUserProfile.module.css";


export const MainUserProfile = () => {
  const { setIsNotFoundUser } = UserNotFountUserStore()
  const { userName = 'keryaboks' } = useUserNameStore();

  const { isLoading, data } = useUserData(userName, setIsNotFoundUser);

  if (isLoading) return <div>Loading...</div>;

  const { avatar_url, name, login, followers, following, html_url } = data as UserDataTypes;

  return (
    <div className={styles.container}>
      <img className={styles.img} src={avatar_url} alt="avatar" />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.login}>
          <a href={html_url} target="_blank" rel="noreferrer">
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

