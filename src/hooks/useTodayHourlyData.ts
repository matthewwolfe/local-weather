import { useMemo } from 'react';
import { getTodayHourlyData } from 'utils/getTodayHourlyData';
import useWeather from './useWeather';

import { HourlyData } from 'types/weather';

function useTodayHourlyData(): HourlyData {
  const { hourlyData } = useWeather();
  return useMemo(() => getTodayHourlyData(hourlyData), [hourlyData]);
}

export default useTodayHourlyData;
