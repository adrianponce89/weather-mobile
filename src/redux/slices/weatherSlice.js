import { createSlice } from '@reduxjs/toolkit';
import weatherService from '../../services/weatherService';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { current: {}, forecast: {} },
  reducers: {
    getCurrentWeatherRequest: (state, action) => {
      const { city = 'local' } = action.payload;
      state.current[city] = { loading: true, error: null };
    },
    getCurrentWeatherSuccess: (state, action) => {
      const { city = 'local', data } = action.payload;
      state.current[city] = { loading: false, loaded: true, data: data };
    },
    getCurrentWeatherFailure: (state, action) => {
      const { city = 'local', error } = action.payload;
      state.current[city] = { loading: false, error: error };
    },
    getForecastWeatherRequest: (state, action) => {
      const { city = 'local' } = action.payload;
      state.forecast[city] = { loading: true, error: null };
    },
    getForecastWeatherSuccess: (state, action) => {
      const { city = 'local', data } = action.payload;
      state.forecast[city] = { loading: false, loaded: true, data: data };
    },
    getForecastWeatherFailure: (state, action) => {
      const { city = 'local', error } = action.payload;
      state.forecast[city] = { loading: false, error: error };
    },
  },
});

export const {
  getCurrentWeatherRequest,
  getCurrentWeatherSuccess,
  getCurrentWeatherFailure,
  getForecastWeatherRequest,
  getForecastWeatherSuccess,
  getForecastWeatherFailure,
} = weatherSlice.actions;

export function getCurrentWeather(city) {
  return (dispatch) => {
    dispatch(getCurrentWeatherRequest({ city }));
    weatherService.getCurrentWeather(city).then(
      (data) => {
        dispatch(getCurrentWeatherSuccess({ city, data }));
      },
      (error) => {
        dispatch(getCurrentWeatherFailure({ city, error: error.toString() }));
      }
    );
  };
}

export function getForecastWeather(city) {
  return (dispatch) => {
    dispatch(getForecastWeatherRequest({ city }));
    weatherService.getForecastWeather(city).then(
      (data) => {
        dispatch(getForecastWeatherSuccess({ city, data }));
      },
      (error) => {
        dispatch(getForecastWeatherFailure({ city, error: error.toString() }));
      }
    );
  };
}

export default weatherSlice.reducer;
