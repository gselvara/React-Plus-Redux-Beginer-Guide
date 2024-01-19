import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";

import theStyle from "./style.module.css";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    console.log("I got a difficulty of ?", difficulty);
    setCurrentDifficulty(difficulty);
  };
  return (
    <div>
      <h1>Select your react difficulty</h1>
      <div className={theStyle.workspace}>
        <MenuList
          onItemClick={onMenuListItemClick}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
