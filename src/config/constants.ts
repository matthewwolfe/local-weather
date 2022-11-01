const API_KEY = 'apiKey=e1f10a1e78da46f5b10a1e78da96f525';
export const LOCATION_IQ_API_KEY = 'pk.729a226af0a881a329ff8687423f5610';
const WEATHER_API = 'https://api.weather.com/v3/wx/forecast';

export const DAILY_FORECAST_URL = `${WEATHER_API}/daily/10day?${API_KEY}&language=en-US&units=e&format=json`;
export const HOURLY_FORECAST_URL = `${WEATHER_API}/hourly/10day?${API_KEY}&units=e&language=en-US&format=json`;

export const REVERSE_GEOCODE_URL = `https://locationiq.com/v1/reverse.php?key=${LOCATION_IQ_API_KEY}&format=json`;
