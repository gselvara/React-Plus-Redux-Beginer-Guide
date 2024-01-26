import { MenuListItem } from "../MenuListItem/MenuListItem";
import theStyle from "./style.module.css";

export function MenuList(props) {
  return (
    <div className={theStyle.container}>
      <MenuListItem
        onClick={props.onItemClick}
        isSelected={props.difficulty === "Low"}
        difficulty="Low"
      />
      <MenuListItem
        onClick={props.onItemClick}
        isSelected={props.difficulty === "Medium"}
        difficulty="Nedium"
      />
      <MenuListItem
        onClick={props.onItemClick}
        isSelected={props.difficulty === "High"}
        difficulty="High"
      />
      <MenuListItem
        onClick={props.onItemClick}
        isSelected={props.difficulty === "Insane"}
        difficulty="Insane"
      />
    </div>
  );
}
