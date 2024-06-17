import { Pressable, Text } from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function IconBtn({icon, size, color, onPress}){
  return (
    <Pressable onPress={onPress}>
        <Ionicons name={icon} size={size} color={color}/>
    </Pressable>
  );
};
