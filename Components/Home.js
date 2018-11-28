import React from "react";
import { View, Button, Text, TextInput, Image, Alert } from "react-native";
import styles from "../styles/styles";

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
            onChangeText={text => this.setState({ username: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/lock.png")} />
          <TextInput placeholder="Contraseña" style={{ paddingLeft: 5 }} />
        </View>
        <Button title="Ingresar" onPress={() => this.handleSubmit()} />
      </View>
    );
  }
  async handleSubmit() {
    const userResponse = await fetch(
      `https://miofertaudeapi2.herokuapp.com/users/${this.state.username}`
    );
    const userJson = await userResponse.json();
    if (userJson.status === "ok") {
      this.state.navigation.navigate("Oferta");
    } else if (userJson.status === "prevented") {
      Alert.alert("Tiene los siguiente impedimentos:", userJson.impediments);
    } else {
      Alert.alert(userJson.status);
    }
  }

  handleInputChange(event) {
    const value = event.target.value;

    this.setState({ username: value });
  }
}
// onPress={() => this.state.navigation.navigate("Oferta")}
