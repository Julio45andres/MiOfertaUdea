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

export default class AcercaDe extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Mi Oferta Udea</Text>
        <Text />
        <Text>Proyecto integrador II</Text>
        <Text />
        <Text>Integrantes:</Text>
        <Text>Julián Muñoz</Text>
        <Text>David Santacoloma</Text>
        <Text>Pilar Arroyave</Text>
        <Text />
        <Text>Docente:</Text>
        <Text>Andres Marín Lopera</Text>
      </View>
    );
  }
}
