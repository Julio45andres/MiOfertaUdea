import React from "react";
import { FlatList, ActivityIndicator, View, Button, Alert } from "react-native";
import styles from "../styles/styles";

export default class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offerData: [],
      coursesData: [],
      courseInfo: {
        // grupo: "",
        // cupomaximo: "",
        // cupodisponible: "",
        // aulas: "",
        // profesores: ""
      },
      courseInfoIsLoading: true,
      isLoading: true,
      navigation: this.props.navigation
    };
  }

  async componentDidMount() {
    const offerResponse = await fetch(`https://api.myjson.com/bins/17bfb2`);
    const offerJson = await offerResponse.json();
    const coursesResponse = await fetch(`https://api.myjson.com/bins/1980fy`);
    const courseJson = await coursesResponse.json();
    this.setState({
      offerData: offerJson,
      coursesData: courseJson,
      isLoading: false
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.coursesData}
          renderItem={({ item }) => (
            <View style={styles.buttonContainer}>
              <Button
                title={item.nombre}
                onPress={() => this._onPressButton(item.programa)}
              />
            </View>
          )}
          keyExtractor={(item, index) =>
            item.programa.toString() + index.toString()
          }
          //ItemSeparatorComponent={this.renderSeparator}
        />
        <Button
          title={
            "Tanda: " + 9 + "\n" + "Fecha: 11/02/2019" + "\n" + "Hora: 02:00 pm"
          }
          onPress={() => {}}
        />
      </View>
    );
  }

  async _onPressButton(programa) {
    const courseResponse = await fetch(
      `https://miofertaudeapi2.herokuapp.com/courses/${programa}`
    );
    const courseJson = await courseResponse.json();
    this.setState({
      courseInfo: courseJson
    });
    Alert.alert(
      "Información del curso",
      // Mensaje
      "Codigo del programa: " +
        courseJson.grupo +
        "\n" +
        "Cupo máximo: " +
        courseJson.cupomaximo +
        "\n" +
        "Cupo disponible: " +
        courseJson.cupodisponible +
        "\n" +
        "Aula: " +
        courseJson.aulas +
        "\n" +
        "Profesores: " +
        courseJson.profesores
    );
    this.setState({
      courseInfo: {}
    });
  }
}
