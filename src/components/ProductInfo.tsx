const ProductInfo = () => {
  const numbers = [1, 2, 3, 4, 5, 5];
  const product = {
    name: " Computer",
    price: "12343434",
    availability: "In Stock",
  };
  return (
    <div>
      <h1 className="">Name: {product.name}</h1>
      <h1 className="">Price: ${product.price}</h1>
      <h1 className="">Availability: {product.availability}</h1>
      {numbers.map((a) => (
        <ul key={Math.random()}>
          <li className="">{a}</li>
        </ul>
      ))}
      <h3 className="">
        {numbers.map((number) => (
          <ul key={number}>
            <li className="">{number}</li>
          </ul>
        ))}
      </h3>
    </div>
  );
};
export default ProductInfo;
