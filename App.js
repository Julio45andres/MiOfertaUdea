import React from "react";
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
  Button,
  Alert,
  Text
} from "react-native";
import { createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

class Offer extends React.Component {
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

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         backgroundColor: "#CED0CE",
  //         marginLeft: "14%",
  //         flex: 1
  //       }}
  //     />
  //   );
  // };
}

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Mi Oferta Udea!</Text>
        <Button
          title="Ingresar"
          onPress={() => this.state.navigation.navigate("Offer")}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Offer: Offer,
    Login: DetailsScreen
  },
  {
    initialRouteName: "Login"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
