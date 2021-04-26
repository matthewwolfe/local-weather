import { HourlyData, WeatherApiHourly } from 'types/weather';

export function getTodayHourlyData(weatherData: WeatherApiHourly): HourlyData {
  const {
    cloudCover,
    dayOfWeek,
    relativeHumidity,
    precipChance,
    temperature,
    validTimeLocal,
    windSpeed,
    wxPhraseLong,
  } = weatherData;

  return {
    cloudCover: cloudCover.slice(0, 18),
    day: dayOfWeek[0],
    dayOfWeek: dayOfWeek.slice(0, 18),
    precipChance: precipChance.slice(0, 18),
    relativeHumidity: relativeHumidity.slice(0, 18),
    temperature: temperature.slice(0, 18),
    validTimeLocal: validTimeLocal.slice(0, 18),
    windSpeed: windSpeed[0],
    wxPhraseLong: wxPhraseLong[0],
  };
}
