import { Button, StyleSheet, View } from "react-native";
import Input from "./Input";
import Buttonx from "../ui/Buttonx";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm() {
    const navigation = useNavigation();
    function login(){
      navigation.navigate('Home')
    };
    
  return (
    <View>
      <Input value={"Enter your e-mail "}>E-mail</Input>
      <Input value={"Enter your password"} passwordHide={true}>
        Password
      </Input>
      <View style={styles.btn}>
        <Button title="Login" onPress={login}/>
        <Buttonx>New User, Click here...</Buttonx>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginLeft: "25%",
    marginVertical: 16,
    width: "50%",
  },
});
