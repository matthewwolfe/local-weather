import { useState, useEffect } from 'react';
import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';
import { CoordsContext } from '../../contexts';
import { getCoords } from '../../utils/getCoords';
import { localStorage } from '../../utils/localStorage';

function CoordsProvider({ children }) {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedCoords = localStorage.getItem('coords');

    if (savedCoords) {
      setCoords(savedCoords);
      return;
    }

    refreshCoords(setCoords, setError);
  }, []);

  if (error) {
    return <ErrorFallback />;
  }

  if (!coords) {
    return <Loader />;
  }

  return (
    <CoordsContext.Provider
      value={{
        coords,
        error,
        refreshCoords: () => refreshCoords(setCoords, setError),
      }}
    >
      {children}
    </CoordsContext.Provider>
  );
}

async function refreshCoords(setCoords, setError) {
  setCoords(null);
  setError(null);

  try {
    const coords = await getCoords();
    setCoords(coords);
  } catch (error) {
    setError(error);
  }
}

export default CoordsProvider;
