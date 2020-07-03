import useSWR from 'swr';
import { WeatherContext } from '../../contexts';
import {
  DAILY_FORECAST_URL,
  HOURLY_FORECAST_URL,
} from '../../config/constants';
import { fetcher } from '../../utils/fetcher';

function WeatherProvider({ children }) {
  const { data: dailyData, error: dailyError } = useSWR(
    DAILY_FORECAST_URL,
    fetcher,
  );
  const { data: hourlyData, error: hourlyError } = useSWR(
    HOURLY_FORECAST_URL,
    fetcher,
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
