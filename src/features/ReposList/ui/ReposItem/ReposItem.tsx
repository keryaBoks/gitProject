import type { FC } from "react";
import styles from "./ReposItem.module.css";
import { DEFAULT_DSECTIPTION } from "@features/ReposList/ui/ReposItem/conts";
import { ReposItemProps } from "@features/ReposList/ui/ReposItem/ReposItemTypes";


export const ReposItem: FC<ReposItemProps> = ({ item }) => {

  const { name, description, html_url } = item;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a href={html_url} target="_blank" rel="noreferrer">
          <p>{name}</p>
        </a>
      </div>
      <div className={styles.desc}>
        {description || DEFAULT_DSECTIPTION}
      </div>
    </div>
  );
};

