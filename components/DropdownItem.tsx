import * as React from "react";
import styles from "../assets/styles";

export default function DropdownItem(props : any) {
    let stack : any = props.stack;
    let arr : any = props.arr;
    const getInitialState : any = () => {
        return value;
    };
    const [value, setValue] = React.useState(getInitialState != undefined ? props.value : getInitialState);
    
    const handleChange = (e : any) => {
        setValue(e.target.value);
        if(document.getElementById(props.id).checked) {
            // document.getElementById("hi").innerHTML = props.id;
            stack[props.id] = e.target.value;
        }
    };
    return (
        <div>
            <input type="checkbox" style={styles.popupCheckBox} id={props.id}></input>
            <select value={value} onChange={handleChange}>
            {arr.map((item: any) => {
                return (
                    <option style={styles.optionDropdown} value={item}>{`${item}`}</option>
                );
            })}
            </select>
        </div>
      );
}