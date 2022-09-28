const Cart = ({ name, details, imgLink, imgAlt }) => {
  return (
    <>
      <img src={imgLink} alt={imgAlt} />
      <div>{name}</div>
      <div>{details}</div>
    </>
  );
};

export default Cart;
