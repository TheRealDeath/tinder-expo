import * as React from "react";
import styles from "../assets/styles";
import DropdownItem from "./DropdownItem";

export default function Dropdown(props : any) {
  let stack : any = props.stack; 
    function fun() {
      let s : string = "";
      for(let key in stack) {
        s += stack[key];
      }
      document.getElementById("test").innerHTML = s;
    };
      return (
        <div>
           <DropdownItem stack={stack} id={"bloodType"} value={"blank"} arr={["a+","a-","b+","b-"]}></DropdownItem>
            <p id="test">{`You selected ${stack.bloodType}`}</p>
            <button style={styles.button} onClick={fun}></button>
        </div>
      );
}
