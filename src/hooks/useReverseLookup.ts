import useSWR from 'swr';
import { REVERSE_GEOCODE_URL } from 'config/constants';
import { fetcher } from 'utils/fetcher';
import { localStorage } from 'utils/localStorage';
import useCurrentCoords from './useCurrentCoords';

import { Address, Coordinates } from 'types/geolocation';

interface Data {
  address: Nullable<Address>;
  error: Nullable<Error>;
}

interface ReverseGeolocation {
  data: Nullable<Data>;
  error: Nullable<Error>;
  loading: boolean;
}

function useReverseLookup(): ReverseGeolocation {
  const { coords } = useCurrentCoords();
  const { data, error } = useSWR<Data, Error>(generateUrl(coords), fetcher, {
    onError() {
      localStorage.removeItem('address');
    },
    onSuccess({ address }) {
      localStorage.setItem<Nullable<Address>>('address', address);
    },
  });

  return {
    data,
    error: error || (data && data.error),
    loading: !data && !error,
  };
}

function generateUrl(coordinates: Nullable<Coordinates>) {
  const { latitude = null, longitude = null } = coordinates || {};

  return `${REVERSE_GEOCODE_URL}&lat=${latitude}&lon=${longitude}`;
}

export default useReverseLookup;
