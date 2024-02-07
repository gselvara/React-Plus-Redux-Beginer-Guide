import theStle from "./style.module.css";
import copyPasteImg from "../../assets/copy-paste.svg";

export function PasswordGeneratorFooter(props) {
    return (<div className={theStle.root}>
        <div>{props.genPassword}</div>
        <img className={theStle.icon} src={copyPasteImg} alt="Copy Password" />
    </div>);
}