import theStle from "./style.module.css";
import copyPasteImg from "../../assets/copy-paste.svg";

export function PasswordGeneratorFooter(props) {
    function copyPassword() {
        navigator.clipboard.writeText(props.genPassword);
    }

    return (<div className={theStle.root} onClick={copyPassword}>
        <div>{props.genPassword}</div>
        <img className={theStle.icon} src={copyPasteImg} alt="Copy Password" />
    </div>);
}