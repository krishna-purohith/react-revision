const Product = ({ name, price }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Price: ${price}</h1>
    </div>
  );
};
export default Product;
