import React from "react";
import { FlatList, ActivityIndicator, View, Button, Alert } from "react-native";
import styles from "../styles/styles";

export default class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offerData: [],
      coursesData: [],
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
      </View>
    );
  }

  _onPressButton(programa) {
    // this.state.coursesData
    //   .filter(({ course }) => course.programa.toString() == programa.toString())
    //   .map(({ course }) => {
    //     Alert.alert("Info del curso " + course.nombre);
    //   }, this);
    Alert.alert("Codigo del programa: " + programa);
  }
}
