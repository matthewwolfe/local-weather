const API_KEY = 'apiKey=6532d6454b8aa370768e63d6ba5a832e';
const WEATHER_API = 'https://api.weather.com/v3/wx/forecast';

export const DAILY_FORECAST_URL = `${WEATHER_API}/daily/10day?${API_KEY}&geocode=38.88%2C-77.09&language=en-US&units=e&format=json`;
export const HOURLY_FORECAST_URL = `${WEATHER_API}/hourly/10day?${API_KEY}&geocode=39.43%2C-75.04&units=e&language=en-US&format=json`;
