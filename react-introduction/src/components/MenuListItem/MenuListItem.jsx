import { useState } from "react";
import theStyle from "./style.module.css";

export function MenuListItem(props) {
  const [isHovered, setIsHovered] = useState(false);

  function activate() {
    setIsHovered(true);
  }

  function deActivate() {
    setIsHovered(false);
  }

  function getBackGroundColor() {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      return "#eff0ef";
    }
  }

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };
  return (
    <div
      onClick={onItemClick}
      className={theStyle.container}
      onMouseEnter={activate}
      onMouseLeave={deActivate}
      style={{ backgroundColor: getBackGroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
}
