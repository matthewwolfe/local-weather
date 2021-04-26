import { createContext } from 'react';

import { WeatherApiDaily, WeatherApiHourly } from 'types/weather';

export interface IWeatherContext {
  dailyData: WeatherApiDaily;
  hourlyData: WeatherApiHourly;
}

const WeatherContext = createContext<Nullable<IWeatherContext>>(null);

export default WeatherContext;
