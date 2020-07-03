export function getTodayHourlyData(hourlyData) {
  const {
    dayOfWeek,
    relativeHumidity,
    precipChance,
    temperature,
    validTimeLocal,
    windSpeed,
  } = hourlyData;

  return {
    day: dayOfWeek[0],
    dayOfWeek: dayOfWeek.slice(0, 18),
    precipChance: precipChance.slice(0, 18),
    relativeHumidity: relativeHumidity.slice(0, 18),
    temperature: temperature.slice(0, 18),
    validTimeLocal: validTimeLocal.slice(0, 18),
    windSpeed: windSpeed.slice(0, 18),
  };
}
