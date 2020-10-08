import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function homeRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}

function exploreRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}

function cartRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={homeRoutes} />
        <Drawer.Screen name="Explore" component={exploreRoutes} />
        <Drawer.Screen name="Cart" component={cartRoutes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
