import useSWR from 'swr';
import { fetcher } from 'utils/fetcher';
import useCurrentCoords from './useCurrentCoords';

import { Coordinates } from 'types/geolocation';

interface Forecast<T> {
  data?: T;
  error?: Error;
}

function useGetForecast<T>(url: string): Forecast<T> {
  const { coords } = useCurrentCoords();
  return useSWR<T, Error>(generateUrl(url, coords), fetcher);
}

function generateUrl(url: string, coordinates: Nullable<Coordinates>) {
  const { latitude, longitude } = coordinates || {};

  return `${url}&geocode=${latitude}%2C${longitude}`;
}

export default useGetForecast;
