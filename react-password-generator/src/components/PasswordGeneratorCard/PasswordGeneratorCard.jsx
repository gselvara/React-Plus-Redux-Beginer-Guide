import { useState } from "react";
import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter";
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader";
import theStle from "./style.module.css";

export function PasswordGeneratorCard() {
    const[generatedPassword, setGeneratedPassword] = useState("Amazing Password");
    return (<div className={theStle.root}>
        <div className={ theStle.main}>
            <PasswordGeneratorHeader />
            <PasswordGeneratorBody onSubmit={setGeneratedPassword} />
        </div>
        <PasswordGeneratorFooter genPassword={generatedPassword} />
    </div>);
}