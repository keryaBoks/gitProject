import type { FC } from "react";
import styles from "./ReposItem.module.css";
import { UserDataReposTypes } from "../../api";

interface ReposItemProps {
  item: {
    name: string;
    description: string | null;
    html_url: string;
  };
}

export const ReposItem: FC<ReposItemProps> = ({ item }) => {

  const { name, description, html_url } = item as UserDataReposTypes;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a href={html_url} target="_blank" rel="noreferrer">
          <p>{name}</p>
        </a>
      </div>
      <div className={styles.desc}>
        {!description ? (
          <p>There is no description</p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

