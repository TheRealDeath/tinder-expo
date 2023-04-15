import * as React from "react";
import styles from "../assets/styles";
import DropdownItem from "./DropdownItem";

export default function Dropdown(props : any) {
  let stack : any = props.stack; 
  return (
    <div>
      <DropdownItem stack={stack} id={props.id} value={"blank"} arr={props.arr}></DropdownItem>
    </div>
  );
}