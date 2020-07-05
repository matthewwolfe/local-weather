import { useState, useEffect } from 'react';
import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';
import { CoordsContext } from '../../contexts';
import { sessionStorage } from '../../utils/sessionStorage';

function CoordsProvider({ children }) {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedCoords = sessionStorage.getItem('coords');

    if (savedCoords) {
      setCoords(savedCoords);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoords(coords);
        sessionStorage.setItem('coords', {
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (geoError) => {
        setError(geoError);
      },
    );
  }, []);

  if (error) {
    return <ErrorFallback />;
  }

  if (!coords) {
    return <Loader />;
  }

  return (
    <CoordsContext.Provider value={{ coords, error }}>
      {children}
    </CoordsContext.Provider>
  );
}

export default CoordsProvider;
