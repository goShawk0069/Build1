import { useContext } from "react";
import { Context } from "../store/context";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductItem from "./ProductItem";

export default function CartItems() {
  const ctx = useContext(Context);
  const cartProduct = ctx.cartItems;

  function removeFromCart(id){
    const updatedCart =  cartProduct.filter((product)=> product.id !== id)
        ctx.setCartItems(updatedCart)
    
  }
  return (
    <FlatList
      data={cartProduct}
      renderItem={({ item, index }) => (
        <ProductItem image={item.image} price={item.price} title={item.title} cartHandler={()=>removeFromCart(item.id)}>Remove from Cart</ProductItem>
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
  },
});
