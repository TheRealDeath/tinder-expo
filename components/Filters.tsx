import * as React from "react";
import { Text, TouchableOpacity, View, Image} from "react-native";
import Modal from "react-native-modal";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
import Dropdown from "./Dropdown";


export default function Filters(props : any) {
  let stack : any = props.stack;
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const makeModalTrue = () => {
    setIsModalVisible(() => true);
  };
  function getStuff() {
    return isModalVisible;
  }
  return (
    <TouchableOpacity style={styles.filters} onPress={handleModal}>
      <Text style={styles.filtersText}>
        <Icon name="filter" size={13} color={DARK_GRAY} /> Filters
      </Text>
      <Modal isVisible={isModalVisible} onBackButtonPress={() => {}} onBackdropPress={() => {}} style={styles.popup}>
          <View style={styles.popupView}>
            <TouchableOpacity style={styles.popupView} onPress={makeModalTrue}>
              <Dropdown id="bloodType" arr={["N/A","A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]} stack={stack}></Dropdown>
              <Dropdown id="age" arr={["N/A","18-24","24-40","40-50","50-60","70-100"]} stack={stack}></Dropdown>
              <Dropdown id="occupation" arr={["N/A","School teacher","the president obama","ceo"]} stack={stack}></Dropdown>
              <Dropdown id="distance" arr={["N/A","closest (10 miles)","close (100 miles)","far (1000 miles)"]} stack={stack}></Dropdown>
              <Dropdown id="height" arr={["shorter","matching","taller"]} stack={stack}></Dropdown>
            </TouchableOpacity>
            <View style={styles.popupButton}>
                <TouchableOpacity  onPress={handleModal}>
                  <Image style={styles.popupImage}source={{uri: "https://png.pngtree.com/element_our/20190531/ourmid/pngtree-return-icon-image_1287495.jpg"}}></Image>
                </TouchableOpacity>
            </View>
          </View>
      </Modal>
    </TouchableOpacity>
  );
}
