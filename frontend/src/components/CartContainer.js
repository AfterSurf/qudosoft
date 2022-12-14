import { useState, useEffect, useContext } from "react";
import {
  CategoryContext,
  CategoriesDispatchContext,
} from "../context/categoryContext";

import Cart from "./Cart";

const CartContainer = () => {
  const [data, setData] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  const chosenCategory = useContext(CategoryContext);
  const setCategories = useContext(CategoriesDispatchContext);

  const entries = [];

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
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
    data.forEach((element) => {
      const elementCategory = element.category.toLowerCase();
      entries.push([
        element.name,
        element.currentPriceFormated,
        element.image.src,
        element.image.alt,
        elementCategory,
      ]);
      // es6!
      if (
        !category.find((singleCategory) => singleCategory === elementCategory)
      ) {
        setCategory([...category, elementCategory]);
        setCategories([...category, elementCategory]);
      }
    });
  }

  if (chosenCategory.length === 0) {
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
  } else {
    return (
      <div className="elementContainer">
        {entries.map((element) => {
          if (chosenCategory.find((cat) => cat == element[4])) {
            return (
              <div>
                <Cart
                  name={element[0]}
                  details={element[1]}
                  imgLink={element[2]}
                  imgAlt={element[3]}
                  category={element[4]}
                ></Cart>
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default CartContainer;
