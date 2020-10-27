import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import get from 'lodash/get';
import { celsiusFormat } from '../utils';
import LoadingWrapper from './LoadingWrapper';
import ForecastList from './ForecastList';

const WeatherCard = ({ weather, forecast }) => {
  const loading = !weather || weather.loading;
  const city = get(weather, 'data.city');
  const iconCode = get(weather, 'data.current.weather[0].icon');
  const { temp, feels_like, temp_min, temp_max } =
    get(weather, 'data.current.main') || {};

  return (
    <View style={styles.root}>
      <LoadingWrapper loading={loading} style={styles.content}>
        <View style={styles.current}>
          <Text style={styles.city}>{city}</Text>
          <View style={styles.main}>
            <Image
              style={styles.bigLogo}
              source={{
                uri: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
              }}
            />

            <Text style={styles.mainTemp}>{celsiusFormat(temp)}</Text>
          </View>
          <Text style={styles.title}>
            {celsiusFormat(temp_min)} / {celsiusFormat(temp_max)} | Sensación
            Termica {celsiusFormat(feels_like)}
          </Text>
        </View>
        <View style={styles.forecast}>
          <ForecastList forecast={forecast} />
        </View>
      </LoadingWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  current: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  forecast: {
    flex: 1,
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTemp: {
    fontSize: 46,
    margin: 0,
    color: '#db0',
  },
  city: {
    fontSize: 24,
    color: '#d00',
  },
  title: {
    fontSize: 14,
  },
  bigLogo: {
    height: 100,
    width: 100,
  },
});

export default WeatherCard;
