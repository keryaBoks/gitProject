import type { FC } from "react";
import { useUserDataRepos } from "../../api/useUserDataRepos";
import { RepIcon } from "../../icons/warnings/rep-icon";
import { WarningComponent } from "../WarningComponent/WarningComponent";
import "./ReposList.scss";
import ReposItem from "./ReposItem/ReposItem";

interface RepoData {
  name: string;
  description: string | null;
  html_url: string;
}

interface ReposListProps {
  userName: string;
}

export const ReposList: FC<ReposListProps> = ({ userName }) => {
  const { data } = useUserDataRepos(userName);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="repos-list__container">
      {data.length === 0 ? (
        <WarningComponent text="Repository list is empty" icon={<RepIcon />} />
      ) : (
        <>
          <div className="repos-list__title">Repositories ({data.length})</div>
          <ul className="repos-list__list">
            {data.map((item: RepoData) => (
              <li className="repos-list__list__item" key={item.name}>
                <ReposItem item={item} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

