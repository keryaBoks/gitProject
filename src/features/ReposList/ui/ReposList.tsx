/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ReactComponent as RepIcon } from "src/icons/warnings/rep-icon.svg";
import { WarningComponent } from "src/widgets/WarningComponent/WarningComponent";
import { ReposItem } from "./ReposItem/ReposItem";
import { UserDataReposTypes, useUserDataRepos } from "../api";
import { useUserNameStore } from "src/widgets/Header/model";
import styles from "./ReposList.module.css";


export const ReposList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { userName } = useUserNameStore()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { data } = useUserDataRepos(userName);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {data.length === 0 ? (
        <WarningComponent text="Repository list is empty" icon={<RepIcon />} />
      ) : (
        <>
          <div className={styles.title}>Repositories ({data.length})</div>
          <ul className={styles.list}>
            {data.map((item: UserDataReposTypes) => (
              <li className={styles.listItem} key={item.name}>
                <ReposItem item={item} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

