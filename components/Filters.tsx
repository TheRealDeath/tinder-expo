import * as React from "react";
import { Text, TouchableOpacity, View, Image} from "react-native";
import Modal from "react-native-modal";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
import Dropdown from "./Dropdown";

export default function Filters(this: any) {
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
              <Dropdown stack={{
                bloodType: "N/A",
                age: NaN,
                occupation: "N/A",
              }}></Dropdown>
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
