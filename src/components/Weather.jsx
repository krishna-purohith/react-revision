const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <h1>Cold</h1>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <h1>Pleasasnt</h1>;
  } else return <h1>Hot</h1>;
};
export default Weather;
