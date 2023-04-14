import * as React from "react";
import { Text, TouchableOpacity, View, Image} from "react-native";
import Modal from "react-native-modal";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
const con = {
    prop: [
        {
            value: "ja"
        }
    ]
};

export default function Dropdown(this: any) { 
    let [value, setValue] = React.useState('fruit');
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    };
    let arr =con.prop;
    return (
    <label>
       <select value={value} onChange={handleChange}>
        {arr.map((temp) => (
            <option value={temp.value}></option>
        ))}

       </select>

     </label>
    );
}

