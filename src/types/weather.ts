interface WeatherApiShared {
  cloudCover: Array<number>;
  day: string;
  dayOfWeek: Array<string>;
  precipChance: Array<number>;
  relativeHumidity: Array<number>;
  temperature: Array<number>;
  validTimeLocal: Array<string>;
}

export interface HourlyData extends WeatherApiShared {
  windSpeed: number;
  wxPhraseLong: string;
}

export interface WeatherApiDaily {
  dayOfWeek: Array<string>;
  narrative: Array<string>;
  temperatureMax: Array<number>;
  temperatureMin: Array<number>;
}

export interface WeatherApiHourly extends WeatherApiShared {
  windSpeed: Array<number>;
  wxPhraseLong: Array<string>;
}
