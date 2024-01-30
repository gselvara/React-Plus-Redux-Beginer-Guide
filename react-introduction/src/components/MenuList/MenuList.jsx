import { MenuListItem } from "../MenuListItem/MenuListItem";
import theStyle from "./style.module.css";
import { DIFFICULTIES } from "./constant"

export function MenuList(props) {

  function displayMenuListItem(theDifficulty) {
    return (
      <MenuListItem
        onClick={props.onItemClick}
        isSelected={props.difficulty === theDifficulty}
        difficulty={theDifficulty}
      />
    );
  }

  return (
    <div className={theStyle.container}>
      {
        DIFFICULTIES.map(displayMenuListItem)
      }
    </div>
  );
}
