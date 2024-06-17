import { useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card, Rating } from "@rneui/themed";

export default function PorductScreen() {
const route = useRoute();
    const product = route.params.product

  return (
    <Card>
      <Card.Title>{product.title}</Card.Title>
      <Card.Divider />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Rating

        readonly
        startingValue={product.rating.rate}
        imageSize={10}
      />
      <Text>{product.rating.count} reviews</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
  category: {
    fontSize: 12,
    color: "#888",
    marginVertical: 10,
  },
});
