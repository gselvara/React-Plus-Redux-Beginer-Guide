import theStle from "./style.module.css";

export function PasswordGeneratorBody() {
    return (
        <form>
            <div className={theStle.grid_container}>
                <div className={theStle.grid_item}>
                    Size
                    <select defaultValue={15}>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
                <div className={theStle.grid_item}>
                    Uppercase
                    <input type="checkbox" defaultChecked/>
                </div>
                <div className={theStle.grid_item}>
                    Numbers
                    <input type="checkbox" defaultChecked/>
                </div>
                <div className={theStle.grid_item}>
                    Specials
                    <input type="checkbox" defaultChecked/>
                </div>
            </div>
            <div className={theStle.btn_container}>
                <button className={theStle.btn_generate}>GENERATE</button>
            </div>
        </form>
    )
}