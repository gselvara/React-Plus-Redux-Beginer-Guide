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

  function getBackgroundColor() {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
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
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
}
