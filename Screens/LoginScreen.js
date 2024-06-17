import { Text } from "react-native";
import LoginForm from "../components/LoginForm";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
 

  return <LoginForm />;
}
