import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import IconBtn from "../ui/iconBtn";
import { useEffect } from "react";
import ProductList from "../components/ProductList";

export default function HomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconBtn
          icon={"cart"}
          size={24}
          onPress={() => navigation.navigate("Cart")}
        />
      ),
    });
  }, [navigation]);
  return <ProductList />;
}
