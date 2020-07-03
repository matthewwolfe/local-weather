import { useMemo } from 'react';
import useWeather from './useWeather';
import { getTodayHourlyData } from '../utils/getTodayHourlyData';

function useTodayHourlyData() {
  const { hourlyData } = useWeather();
  return useMemo(() => getTodayHourlyData(hourlyData), [hourlyData]);
}

export default useTodayHourlyData;
