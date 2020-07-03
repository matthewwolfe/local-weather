import useSWR from 'swr';
import { WeatherContext } from '../../contexts';
import {
  DAILY_FORECAST_URL,
  HOURLY_FORECAST_URL,
} from '../../config/constants';
import { useGetForecast } from '../../hooks';
import { fetcher } from '../../utils/fetcher';

function WeatherProvider({ children }) {
  const { data: dailyData, error: dailyError } = useGetForecast(
    DAILY_FORECAST_URL,
  );

  const { data: hourlyData, error: hourlyError } = useGetForecast(
    HOURLY_FORECAST_URL,
  );

  if (!dailyData || !hourlyData) {
    return null;
  }

  if (dailyError || hourlyError) {
    return <div>Something went wrong :(</div>;
  }

  return (
    <WeatherContext.Provider value={{ dailyData, hourlyData }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
