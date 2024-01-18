import { MenuListItem } from "../MenuListItem/MenuListItem";
import theStyle from "./style.module.css";

export function MenuList(props) {
  return (
    <div className={theStyle.container}>
      <MenuListItem difficulty="Low" />
      <MenuListItem difficulty="Nedium" />
      <MenuListItem difficulty="High" />
      <MenuListItem difficulty="Insane" />
    </div>
  );
}
