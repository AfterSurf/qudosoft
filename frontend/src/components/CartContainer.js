import { useState, useEffect } from "react";

import Cart from "./Cart";

const CartContainer = () => {
  const [data, setData] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const entries = [];

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (response) {
          console.log(response);
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
    console.log("data: ", JSON.stringify(data[0]));
    data.forEach((element) => {
      console.log(element.name);
      entries.push([
        element.name,
        element.currentPriceFormated,
        element.image.src,
        element.image.alt,
        element.category,
      ]);
    });
  }

  return (
    <div className="elementContainer">
      {entries.map((element) => (
        <div>
          <Cart
            name={element[0]}
            details={element[1]}
            imgLink={element[2]}
            imgAlt={element[3]}
            category={element[4]}
          ></Cart>
        </div>
      ))}
    </div>
  );
};

export default CartContainer;
