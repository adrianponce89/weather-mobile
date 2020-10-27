const serverURL = process.env.REACT_APP_SERVER_URL || 'http://10.0.2.2:3000/v1';

export const getCurrentWeather = async (city) => {
  let query = `${serverURL}/current`;
  query = city ? `${query}/${city}` : query;
  const response = await fetch(query);
  const json = await response.json();
  return json;
};

export const getForecastWeather = async (city) => {
  let query = `${serverURL}/forecast`;
  query = city ? `${query}/${city}` : query;
  const response = await fetch(query);
  const json = await response.json();
  return json;
};
