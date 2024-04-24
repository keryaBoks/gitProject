import { useState } from "react";
import { Header } from "./components/Header/Header";
import { MainUserProfile } from "./components/MainUserProfile/MainUserProfile";
import { WarningComponent } from "./components/WarningComponent/WarningComponent";
import { SearchIcon } from "./icons/warnings/search-icon";
import { UserIcon } from "./icons/warnings/user-icon";
import { ReposList } from "./components/ReposList/ReposList";
import "./App.scss";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [isNotFoundUser, setIsNotFoundUser] = useState<boolean>(false);

  return (
    <div className="app">
      <Header
        setUserName={setUserName}
        setIsNotFoundUser={setIsNotFoundUser}
        isNotFoundUser={isNotFoundUser}
      />
      {isNotFoundUser ? (
        <WarningComponent icon={<UserIcon />} text="User not found" />
      ) : userName === "" ? (
        <WarningComponent
          text="Start with searching a GitHub user"
          icon={<SearchIcon />}
        />
      ) : (
        <div className="app-middle">
          <MainUserProfile
            userName={userName}
            setIsNotFoundUser={setIsNotFoundUser}
          />
          <ReposList userName={userName} />
        </div>
      )}
    </div>
  );
}

export default App;
