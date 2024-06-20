import { useRoute } from "@react-navigation/native";
import { FlatList, Text } from "react-native";
import OrderedItems from "../components/OrderItems";
import { useEffect, useState } from "react";

export default function OrdersScreen(){
  const [orders, setOrders] = useState(''); 
  const route = useRoute()
   const myOrders = route.params?.orderedItems
  
   useEffect(() => {
     if(myOrders){
      setOrders((prevOrders)=>[...prevOrders, myOrders])
     }
     console.log('your orders - ' + orders)
   }, [myOrders]);

    
      return  (
        <FlatList data={orders} ListEmptyComponent={<Text>You have no Orders yet..</Text>} renderItem={({item})=><OrderedItems image={item.image} title={item.title} price={item.price} quantity={item.quantity} />} keyExtractor={(item, index)=>index.toString()}/>
      )


    }

  
  

