import Day from './Day';

function WeekList({ dayOfWeek, narrative, temperatureMax, temperatureMin }) {
  return (
    <>
      {dayOfWeek.slice(0, 8).map((day, index) => (
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
