const API_KEY = 'apiKey=6532d6454b8aa370768e63d6ba5a832e';
export const LOCATION_IQ_API_KEY = 'pk.729a226af0a881a329ff8687423f5610';
const WEATHER_API = 'https://api.weather.com/v3/wx/forecast';

export const DAILY_FORECAST_URL = `${WEATHER_API}/daily/10day?${API_KEY}&language=en-US&units=e&format=json`;
export const HOURLY_FORECAST_URL = `${WEATHER_API}/hourly/10day?${API_KEY}&units=e&language=en-US&format=json`;

export const REVERSE_GEOCODE_URL = `https://us1.locationiq.com/v1/reverse.php?key=${LOCATION_IQ_API_KEY}&format=json`;
