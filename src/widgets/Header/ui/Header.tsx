import { useState, ChangeEvent, KeyboardEvent } from "react";
import { ReactComponent as GithubIcon } from "src/icons/github-icon.svg";
import { ReactComponent as SearchIcon } from "src/icons/search-icon.svg";
import { useUserNameStore } from "../model";
import { UserNotFountUserStore } from "src/pages/Mainpage";
import styles from "./Header.module.css";


export const Header = () => {
  const { isNotFoundUser, setIsNotFoundUser } = UserNotFountUserStore()
  const { setUserName } = useUserNameStore();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setUserName(inputValue);
    if (isNotFoundUser === true) {
      setIsNotFoundUser(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setUserName(inputValue);
      if (isNotFoundUser === true) {
        setIsNotFoundUser(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <GithubIcon />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.icon} onClick={handleSearchClick}>
          <SearchIcon />
        </div>
        <input
          placeholder='Enter GitHub username'
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};
