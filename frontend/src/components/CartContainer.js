import { useState, useEffect } from "react";

import Cart from "./Cart";

const CartContainer = () => {
  const [data, setData] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:5000/api/products")
    fetch("/api/products")
      .then((response) => {
        if (response) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return <>loading...</>;
  }

  if (error) {
    return <>error..</>;
  }

  if (data) {
    console.log("data: ", JSON.stringify(data));
  }

  return (
    <>
      <Cart name="Erste" details="Karte"></Cart>
      <Cart name="Zweite" details="Karte"></Cart>
    </>
  );
};

export default CartContainer;
