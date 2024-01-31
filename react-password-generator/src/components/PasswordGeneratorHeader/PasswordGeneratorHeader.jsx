import theStle from "./style.module.css";
import lockImage from "../../assets/lock.svg"
export function PasswordGeneratorHeader() {
    return <div className={theStle.root }>
        <div className={theStle.title}>Password Generator</div>
        <img src={lockImage} className={theStle.icon } alt="Lock Icon"/>
    </div>
}