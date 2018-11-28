import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/styles";
import ScaledImage from "react-native-scaled-image";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Text style={styles.title}>Mi Oferta Udea</Text>
        <Text />
        <Text style={styles.subtitle}>Proyecto integrador II</Text>
        <Text />
        <Text style={styles.subtitle}>Integrantes:</Text>
        <Text>Julián Muñoz</Text>
        <Text>Pilar Arroyave</Text>
        <Text />
        <Text />
        <Text style={styles.subtitle}>Docente:</Text>
        <Text>Andres Marín Lopera</Text>
        <Text />
        <Text />
        <ScaledImage source={require("../assets/ing_udea.png")} width={200} />
      </View>
    );
  }
}
