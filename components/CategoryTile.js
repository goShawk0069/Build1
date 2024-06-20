import { Card } from "@rneui/themed";
import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function CategoryTile({ text }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
    >
      
        <Text style={styles.text}>{text}</Text>
      
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressable: {
    margin: 4,
    height: 200,
    width: "20%",
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent : 'center',
    alignItems : 'center',
    borderWidth : 2,
    borderColor : '#cccccc',
    backgroundColor: "#9e6565", 
    elevation : 5
  },
 
  text: {
    fontSize: 20, // Slightly smaller font size for better fit
    fontWeight: "bold",
    color: "#333", // Darker text color for better readability
  },
  pressed: {
    opacity: 0.75,
  },
});
