import React, { FC } from "react";
import { UserData, useUserData } from "../../api/useUserData";
import "./MainUserProfile.scss";

interface MainUserProfileProps {
  userName: string;
  setIsNotFoundUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainUserProfile: FC<MainUserProfileProps> = ({ userName, setIsNotFoundUser }) => {
  const { isLoading, data } = useUserData(userName, setIsNotFoundUser);

  if (isLoading) return <div>Loading...</div>;

  const { avatar_url, name, login, followers, following, html_url } = data as UserData;

  return (
    <div className="main-user-profile__container">
      <img className="main-user-profile__img" src={avatar_url} alt="avatar" />
      <div>
        <div className="main-user-profile__name">{name}</div>
        <div className="main-user-profile__login">
          <a href={html_url} target="_blank" rel="noreferrer">
            {login}
          </a>
        </div>
      </div>
      <div className="main-user-profile__info">
        <div>{followers} followers</div>
        <div>{following} following</div>
      </div>
    </div>
  );
};

