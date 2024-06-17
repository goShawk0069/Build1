import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import PorductScreen from "./Screens/ProductScreen";
import ContextProvider from "./store/context";
import Buttonx from "./ui/Buttonx";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ContextProvider>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Cart" component={CartScreen} options={{headerRight : ()=><Buttonx style={{color : '#3166d6', fontWeight : 'bold'}}>Checkout</Buttonx>}}/>
        <Stack.Screen name="Product" component={PorductScreen} />
      </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
