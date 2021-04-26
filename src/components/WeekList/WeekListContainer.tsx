import { useWeather } from 'hooks';
import WeekList from './WeekList';

function WeekListContainer(): JSX.Element {
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
