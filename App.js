import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import MapView from "react-native-maps";

export default function App() {
  return (
    <MapView
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      initialRegion={{
        latitude: 10.4069934,
        longitude: -75.5631251,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
