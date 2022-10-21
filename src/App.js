import React from 'react';
import RootNavigator from './routes/RootNavigator';
import OrdersScreen from './screens/home/ordersScreen/index'

const App = props => {
  return <RootNavigator {...props} />;
};

export default App;
