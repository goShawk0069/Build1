import { useNavigation } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
  products: "",
  setProducts: () => {},
  isLoading: true,
  isError: false,
});

export default function ProductContextProvider({ children }) {
  const URL = "https://fakestoreapi.com/products/";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }

  const value = {
    products: products,
    isLoading: isLoading,
    isError: isError,
    setProducts: setProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
