import React from 'react';
import RootNavigator from './routes/RootNavigator';
import MenuScreen from './screens/home/menuScreen';
import ImageTab from './screens/home/menuScreen/components/imageTab';
import OrdersScreen from './screens/home/ordersScreen/index'

const App = props => {
  return <MenuScreen/>;
};

export default App

const styles = StyleSheet.create({})