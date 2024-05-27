import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

export default function PlaygroundScreen() {
  return (
    <View style={stylesTest.container}>
      <Pressable style={stylesTest.borderTest}>
        <Text style={stylesTest.testStyle1}>左上角</Text>
        <Text style={stylesTest.testStyle2} />
      </Pressable>
      <Text>RN: 0.74.1, fabric=1</Text>
    </View>
  );
}

const stylesTest = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  borderTest: {
    height: 200,
    width: 200,
    backgroundColor: '#00ff00',
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testStyle1: {
    position: 'absolute',
    top: -10,
    left: -20,
    backgroundColor: '#ff0000',
    fontSize: 20,
  },
  testStyle2: {
    position: 'absolute',
    top: -30,
    right: -20,
    backgroundColor: '#ff0000',
    fontSize: 20,
    height: 50,
    width: 100,
  },
});
