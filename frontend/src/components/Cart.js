const Cart = ({ name, details, imgLink, imgAlt, category }) => {
  return (
    <>
      <img className="cardImage" src={imgLink} alt={imgAlt} />
      <div>{name}</div>
      <div>{details}</div>
      <div>{category}</div>
    </>
  );
};

export default Cart;
