import React from "react";
import { createDrawerNavigator } from "react-navigation";
import About from "./Components/About.js";
import Home from "./Components/Home";
import Offer from "./Components/Offer.js";
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createDrawerNavigator(
  {
    Home: Home,
    Oferta: Offer,
    "Acerca De": About
  },
  {
    initialRouteName: "Home",
    headerMode: "float"
  }
);
