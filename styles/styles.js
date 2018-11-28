import React, { Component, PropTypes } from "react";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
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
    height: 44,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    height: 22,
    fontWeight: "bold"
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
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});
