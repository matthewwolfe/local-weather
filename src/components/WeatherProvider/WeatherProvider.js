import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';
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

  if (dailyError || hourlyError) {
    return <ErrorFallback />;
  }

  if (!dailyData || !hourlyData) {
    return <Loader />;
  }

  return (
    <WeatherContext.Provider value={{ dailyData, hourlyData }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
