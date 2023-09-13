import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

const App = () => {
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (text) => {
    setText(text);
  };

  const handleButtonPress = () => {
    if (text) {
      setModalVisible(!modalVisible);
    }
  };

  const handleButtonHide = () => {
    setModalVisible(!modalVisible);
    setText("");
  };

  return (
    <>
      <View style={styles.block}>
        <Text>Sign In</Text>
        <View style={styles.section}>
          <TextInput
            value={text}
            style={styles.input}
            placeholder="Text"
            onChangeText={handleInputChange}
          />
          <TouchableOpacity onPress={handleButtonPress}>
            <Text>Click</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleButtonHide()}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
  },
  section: {
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
