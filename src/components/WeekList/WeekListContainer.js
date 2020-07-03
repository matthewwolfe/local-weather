import WeekList from './WeekList';
import { useWeather } from '../../hooks';

function WeekListContainer() {
  const { dailyData } = useWeather();
  const { dayOfWeek, narrative, temperatureMax, temperatureMin } = dailyData;

  return (
    <WeekList
      dayOfWeek={dayOfWeek}
      narrative={narrative}
      temperatureMax={temperatureMax}
      temperatureMin={temperatureMin}
    />
  );
}

export default WeekListContainer;
