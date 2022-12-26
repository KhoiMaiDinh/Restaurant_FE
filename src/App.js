import React from 'react';
import RootNavigator from './routes/RootNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const App = props => {
  return <RootNavigator {...props} />;
};

export default App;
