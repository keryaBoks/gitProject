import type { FC } from "react";
import { UserDataRepos } from "../../../../api/useUserDataRepos";
import styles from "./ReposItem.module.css";

interface ReposItemProps {
  item: {
    name: string;
    description: string | null;
    html_url: string;
  };
}

export const ReposItem: FC<ReposItemProps> = ({ item }) => {

  const { name, description, html_url } = item as UserDataRepos;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a href={html_url} target="_blank" rel="noreferrer">
          <p>{name}</p>
        </a>
      </div>
      <div className={styles.desc}>
        {description === null ? (
          <p>There is no description</p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

