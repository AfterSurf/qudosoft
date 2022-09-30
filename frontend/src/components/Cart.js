import { useState } from "react";
import heart from "../assets/heart.svg";
import redHeart from "../assets/redHeart.svg";

const Cart = ({ name, details, imgLink, imgAlt, category }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <img className="cardImage" src={imgLink} alt={imgAlt} />
      <div>{name}</div>
      <div>{details}</div>
      <div>{category}</div>

      {liked ? (
        <img
          className="cardHeart"
          src={redHeart}
          onClick={async () => {
            setLiked(!liked);
            if (liked) {
              await pushDataToApi(name);
            }
          }}
        ></img>
      ) : (
        <img
          className="cardHeart"
          src={heart}
          onClick={async () => {
            setLiked(!liked);
            if (liked) {
              await pushDataToApi(name);
            }
          }}
        ></img>
      )}
    </>
  );
};

const pushDataToApi = async (input) => {
  fetch("http://localhost:5000/submit", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ a: "b" }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error pushing data: ", error);
    });
};

export default Cart;
