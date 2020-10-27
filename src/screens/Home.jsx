import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentWeather,
  getForecastWeather,
} from '../redux/slices/weatherSlice';
import WeatherCard from '../components/WeatherCard';

export const possibleCities = [
  { title: 'Ubicación Actual', value: '' },
  { title: 'Mar del Plata', value: 'Mar del Plata' },
  { title: 'Londres', value: 'Londres' },
  { title: 'Tokio', value: 'Tokio' },
  { title: 'California', value: 'California' },
  { title: 'Montevideo', value: 'Montevideo' },
];

const Home = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState(null);

  useEffect(() => {
    dispatch(getCurrentWeather(city));
    dispatch(getForecastWeather(city));
  }, []);

  const localWeather = useSelector((state) => state.weather.current[city]);
  const localForecast = useSelector((state) => state.weather.forecast[city]);

  const handleChange = (newcity) => {
    setCity(newcity);
    dispatch(getCurrentWeather(newcity));
    dispatch(getForecastWeather(newcity));
  };

  return (
    <View style={styles.root}>
      <View style={styles.selectCity}>
        <Text>Ciudades</Text>
        <Picker id="cities" selectedValue={city} onValueChange={handleChange}>
          {possibleCities.map((cityItem) => (
            <Picker.Item
              key={cityItem.title}
              label={cityItem.title}
              value={cityItem.value}
            />
          ))}
        </Picker>
      </View>
      <WeatherCard weather={localWeather} forecast={localForecast} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  selectCity: {
    margin: 10,
    minWidth: 120,
  },
});

export default Home;
