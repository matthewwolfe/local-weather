import { localStorage } from './localStorage';

import { Coordinates } from 'types/geolocation';

async function getCoords(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        localStorage.setItem('coords', {
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

        resolve(coords);
      },
      (error) => {
        reject(error);
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 },
    );
  });
}

export { getCoords };
