import { useContext } from 'react';
import { IWeatherContext, WeatherContext } from 'contexts';

function useWeather(): IWeatherContext {
  return useContext(WeatherContext);
}

export default useWeather;
