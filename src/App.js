import React from 'react';
import RootNavigator from './routes/RootNavigator';
import { AuthStackScreen } from './routes/AuthNavigator';

const App = (props) => {
  return (
    //<RootNavigator initialProps={props} />
    <AuthStackScreen/>
  )
};

export default App;


