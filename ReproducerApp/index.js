/**
 * @format
 */

import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

const InitialParamsContext = React.createContext(undefined);

AppRegistry.setWrapperComponentProvider(appParams => {
  return ({children, ...otherProps}) => (
    <InitialParamsContext.Provider value={otherProps.initialProps}>
      <View style={{width: '100%', height: '100%'}} {...otherProps}>
        <View style={{width: '100%', height: 24}}>
          <Text
            style={{
              width: '100%',
              height: '100%',
              fontSize: 10,
              color: 'white',
            }}>
            TEXT
          </Text>
        </View>
        {children}
      </View>
    </InitialParamsContext.Provider>
  );
});
AppRegistry.registerComponent(appName, () => App);
