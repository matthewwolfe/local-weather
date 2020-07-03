import { useState, useEffect } from 'react';
import { CoordsContext } from '../../contexts';

function CoordsProvider({ children }) {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoords(coords);
        setLoading(false);
      },
      (geoError) => {
        setError(geoError);
        setLoading(false);
      },
    );
  }, []);

  if (loading || error) {
    return null;
  }

  return (
    <CoordsContext.Provider
      value={{
        coords,
        error,
        loading,
      }}
    >
      {children}
    </CoordsContext.Provider>
  );
}

export default CoordsProvider;
