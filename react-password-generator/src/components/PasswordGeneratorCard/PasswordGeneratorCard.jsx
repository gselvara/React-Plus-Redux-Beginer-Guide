import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter";
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader";
import theStle from "./style.module.css";

export function PasswordGeneratorCard() {
    return (<div className={theStle.root}>
        <div className={ theStle.main}>
            <PasswordGeneratorHeader />
            <PasswordGeneratorBody />
        </div>
        <PasswordGeneratorFooter />
    </div>);
}