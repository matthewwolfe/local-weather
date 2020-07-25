import React from 'react';
import useSWR from 'swr';
import useCurrentCoords from './useCurrentCoords';
import { REVERSE_GEOCODE_URL } from '../config/constants';
import { fetcher } from '../utils/fetcher';
import { localStorage } from '../utils/localStorage';

function useReverseLookup() {
  const { coords } = useCurrentCoords();
  const { data, error } = useSWR(generateUrl(coords), fetcher, {
    onError() {
      localStorage.removeItem('address');
    },
    onSuccess({ address }) {
      localStorage.setItem('address', address);
    },
  });

  return {
    data,
    error: error || (data && data.error),
    loading: !data && !error,
  };
}

function generateUrl({ latitude, longitude }) {
  return `${REVERSE_GEOCODE_URL}&lat=${latitude}&lon=${longitude}`;
}

export default useReverseLookup;
