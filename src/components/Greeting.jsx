import js from "@eslint/js";

const Greeting = () => {
  const greeting = "Hey!! how are you doing!!";
  const date = new Date();
  const name = "John";
  return (
    <div>
      <h1 className="">{greeting}</h1>
      <p className="">{date.toDateString()}</p>
      <h2 className="">{name}</h2>
    </div>
  );
};
export default Greeting;
