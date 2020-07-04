import { useState, useEffect } from 'react';
import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';
import { CoordsContext } from '../../contexts';

function CoordsProvider({ children }) {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoords(coords);
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
