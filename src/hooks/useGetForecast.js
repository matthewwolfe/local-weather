import useSWR from 'swr';
import useCurrentCoords from './useCurrentCoords';
import { fetcher } from '../utils/fetcher';

function useGetForecast(url) {
  const { coords } = useCurrentCoords();
  return useSWR(generateUrl(url, coords), fetcher);
}

function generateUrl(url, { latitude, longitude }) {
  return `${url}&geocode=${latitude}%2C${longitude}`;
}

export default useGetForecast;
