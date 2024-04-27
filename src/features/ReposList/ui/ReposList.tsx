import { ReactComponent as RepIcon } from "@icons/warnings/rep-icon.svg";
import { WarningComponent } from "@widgets/WarningComponent/WarningComponent";
import { ReposItem } from "@features/ReposList/ui/ReposItem/ReposItem";
import { UserDataReposTypes, useUserDataRepos } from "@features/ReposList/api";
import { useUserNameStore } from "@widgets/Header/model";
import styles from "./ReposList.module.css";
import { Loader } from "@widgets/Loader";


export const ReposList = () => {
  const { userName } = useUserNameStore()
  const { data } = useUserDataRepos(userName);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {!data.length ? (
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

