import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import get from 'lodash/get';
import LoadingWrapper from './LoadingWrapper';
import { celsiusFormat } from '../utils';

const ForecastItem = ({ weather }) => {
  const iconCode = get(weather, 'weather[0].icon');
  const { temp } = weather.main || {};
  const { week_day } = weather || {};
  return (
    <View style={styles.itemRoot}>
      <Text style={styles.title}>{week_day}</Text>

      <View style={styles.main}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
          }}
        />

        <Text style={styles.mainTemp}>{celsiusFormat(temp)}</Text>
      </View>
    </View>
  );
};

const ForecastList = ({ forecast }) => {
  const loading = !forecast || forecast.loading;
  const list = get(forecast, 'data.forecast.list') || [];
  console.log('list:', list);
  return (
    <LoadingWrapper loading={loading} style={styles.content}>
      {list.map((weather) => (
        <ForecastItem key={weather.dt_txt} weather={weather} />
      ))}
    </LoadingWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  itemRoot: {
    flex: 1,
    display: 'flex',
    borderLeftWidth: 2,
    borderLeftColor: '#AAA',
    textAlign: 'center',
    justifyContent: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTemp: {
    fontSize: 24,
    margin: 0,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  tinyLogo: {
    height: 50,
    width: 50,
  },
});

export default ForecastList;
