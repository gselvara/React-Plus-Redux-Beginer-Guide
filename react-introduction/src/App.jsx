import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";

import theStyle from "./style.module.css";

export function App() {
  return (
    <div>
      <h1>Select your react difficulty</h1>
      <div className={theStyle.workspace}>
        <MenuList />
        <DisplayDifficulty difficulty={"Low"} />
      </div>
    </div>
  );
}
