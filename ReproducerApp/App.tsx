/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View
        style={{
          width: 100,
          height: 100,
          paddingLeft: 20,
          flexDirection: 'row',
          backgroundColor: 'red',
        }}
      />
      <View
        style={{
          width: 200,
          height: 100,
          marginTop: -20,
          marginLeft: -20,
          backgroundColor: 'yellow',
          position: 'absolute',
          zIndex: -1,
        }}
      />
    </SafeAreaView>
  );
}

export default App;
