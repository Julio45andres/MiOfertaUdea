import React from "react";
import { View, Button, Text, TextInput, Image } from "react-native";
import styles from "../styles/styles";

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation
    };
  }
  render() {
    return (
      <View style={styles.home}>
        <Image source={require("../assets/udea.png")} />
        <Text style={styles.title}>Mi Oferta Udea</Text>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/user.png")} />
          <TextInput
            placeholder="Nombre de usuario"
            style={{ paddingLeft: 5 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/lock.png")} />
          <TextInput placeholder="Contraseña" style={{ paddingLeft: 5 }} />
        </View>
        <Button
          title="Ingresar"
          onPress={() => this.state.navigation.navigate("Oferta")}
        />
      </View>
    );
  }
}
