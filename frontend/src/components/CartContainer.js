import { useState, useEffect } from "react";

import Cart from "./Cart";

const CartContainer = () => {
  const [state, setstate] = useState(0);
  useEffect(() => {
    console.log("erstes rendering");
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <Cart name="Erste" details="Karte"></Cart>
      <Cart name="Zweite" details="Karte"></Cart>
    </>
  );
};

export default CartContainer;
