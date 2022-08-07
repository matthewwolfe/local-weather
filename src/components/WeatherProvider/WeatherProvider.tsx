import { ReactNode } from 'react';
import { ErrorFallback } from 'components/ErrorFallback';
import { WeatherContext } from 'contexts';
import { DAILY_FORECAST_URL, HOURLY_FORECAST_URL } from 'config/constants';
import { useGetForecast } from 'hooks';

import { WeatherApiDaily, WeatherApiHourly } from 'types/weather';

interface Props {
  children: ReactNode;
}

function WeatherProvider({ children }: Props): JSX.Element {
  const { data: dailyData, error: dailyError } =
    useGetForecast<WeatherApiDaily>(DAILY_FORECAST_URL);

  const { data: hourlyData, error: hourlyError } =
    useGetForecast<WeatherApiHourly>(HOURLY_FORECAST_URL);

  if (dailyError || hourlyError) {
    return <ErrorFallback />;
  }

  if (!dailyData || !hourlyData) {
    return null;
  }

  return (
    <WeatherContext.Provider value={{ dailyData, hourlyData }}>{children}</WeatherContext.Provider>
  );
}

export default WeatherProvider;
