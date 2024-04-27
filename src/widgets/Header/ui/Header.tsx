import { useState, ChangeEvent, KeyboardEvent } from "react";
import { ReactComponent as GithubIcon } from "@icons/github-icon.svg";
import { ReactComponent as SearchIcon } from "@icons/search-icon.svg";
import { useUserNameStore } from "@widgets/Header/model";
import { userNotFountUserStore } from "@pages/Mainpage";
import { Input } from "./Input/Input";
import styles from "./Header.module.css";


export const Header = () => {
  const { isNotFoundUser, setIsNotFoundUser } = userNotFountUserStore()
  const { setUserName } = useUserNameStore();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleSearchClick = () => {
    setUserName(inputValue);
    if (isNotFoundUser) {
      setIsNotFoundUser(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    setUserName(inputValue);
    if (isNotFoundUser) {
      setIsNotFoundUser(false);
    }
  };

  return (
    <div className={styles.container}>
      <GithubIcon />
      <div className={styles.wrapper}>
        <div className={styles.icon} onClick={handleSearchClick}>
          <SearchIcon />
        </div>
        <Input
          placeholder='Enter GitHub username'
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};
