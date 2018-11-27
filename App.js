import React from "react";
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
  Button,
  Alert,
  Text,
  TextInput,
  Image
} from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import AcercaDe from "./AcercaDe.js";

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
      <View style={styles.home}>
        <Image source={require("./assets/udea.png")} />
        <Text style={styles.title}>Mi Oferta Udea!</Text>
        <View style={styles.inputContainer}>
          <Image source={require("./assets/user.png")} />
          <TextInput
            placeholder="Nombre de usuario"
            style={{ paddingLeft: 5 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require("./assets/lock.png")} />
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

const RootStack = createDrawerNavigator(
  {
    Home: DetailsScreen,
    Oferta: Offer,
    "Acerca De": AcercaDe
  },
  {
    initialRouteName: "Home",
    headerMode: "float"
  }
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  title: {
    fontSize: 24,
    height: 44
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  }
});
