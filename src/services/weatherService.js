const serverURL =
  process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/v1';

const getCurrentWeather = async (city) => {
  let query = `${serverURL}/current`;
  query = city ? `${query}/${city}` : query;
  console.log('query:', query);
  const response = await fetch(query);
  console.log('response', response);
  return response.data;
};

const getForecastWeather = async (city) => {
  let query = `${serverURL}/forecast`;
  query = city ? `${query}/${city}` : query;
  const response = await fetch(query);
  return response.data;
};

export default {
  getCurrentWeather,
  getForecastWeather,
};
