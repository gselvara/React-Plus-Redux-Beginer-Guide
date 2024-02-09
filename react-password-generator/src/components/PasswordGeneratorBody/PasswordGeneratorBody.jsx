import { generatedPassword } from "../../util/passwordUtil";
import theStle from "./style.module.css";

export function PasswordGeneratorBody(props) {
    function submitHandler(theEvevnt) {
        theEvevnt.preventDefault();
        //console.log("***", theEvevnt);
        let myFormData = {};
        new FormData(theEvevnt.currentTarget).forEach((value, key) => {
            myFormData[key] = value;
        });
        props.onSubmit(generatedPassword(myFormData));
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={theStle.grid_container}>
                <div className={theStle.grid_item}>
                    Size
                    <select name="size" defaultValue={15}>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
                <div className={theStle.grid_item}>
                    Uppercase
                    <input name="uppercase" type="checkbox" defaultChecked/>
                </div>
                <div className={theStle.grid_item}>
                    Numbers
                    <input name="number" type="checkbox" defaultChecked/>
                </div>
                <div className={theStle.grid_item}>
                    Specials
                    <input name="special" type="checkbox" defaultChecked/>
                </div>
            </div>
            <div className={theStle.btn_container}>
                <button type="submit" className={theStle.btn_generate}>GENERATE</button>
            </div>
        </form>
    )
}