import type { FC } from "react";
import { UserDataRepos } from "../../../api/useUserDataRepos";
import "./ReposItem.scss";

interface ReposItemProps {
  item: {
    name: string;
    description: string | null;
    html_url: string;
  };
}

const ReposItem: FC<ReposItemProps> = ({ item }) => {

  const { name, description, html_url } = item as UserDataRepos;

  return (
    <div className="repos-item__container">
      <div className="repos-item__title">
        <a href={html_url} target="_blank" rel="noreferrer">
          <p>{name}</p>
        </a>
      </div>
      <div className="repos-item__desc">
        {description === null ? (
          <p>There is no description</p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default ReposItem;
