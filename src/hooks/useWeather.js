import { useContext } from 'react';
import { WeatherContext } from '../contexts';

function useWeather() {
  return useContext(WeatherContext);
}

export default useWeather;
