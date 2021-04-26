import Day from './Day';

import { WeatherApiDaily } from 'types/weather';

interface Props
  extends Pick<WeatherApiDaily, 'dayOfWeek' | 'narrative' | 'temperatureMax' | 'temperatureMin'> {}

function WeekList({ dayOfWeek, narrative, temperatureMax, temperatureMin }: Props): JSX.Element {
  return (
    <>
      {dayOfWeek.slice(0, 8).map((day: string, index: number) => (
        <Day
          day={day}
          key={index}
          narrative={narrative[index]}
          temperatureMax={temperatureMax[index]}
          temperatureMin={temperatureMin[index]}
        />
      ))}
    </>
  );
}

export default WeekList;
