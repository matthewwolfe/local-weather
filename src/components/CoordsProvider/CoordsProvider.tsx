import { ReactNode, useState, useEffect } from 'react';
import { ErrorFallback } from 'components/ErrorFallback';
import { Loader } from 'components/Loader';
import { CoordsContext } from 'contexts';
import { getCoords } from 'utils/getCoords';
import { localStorage } from 'utils/localStorage';

import { Coordinates } from 'types/geolocation';

interface Props {
  children: ReactNode;
}

function CoordsProvider({ children }: Props): JSX.Element {
  const [coords, setCoords] = useState<Nullable<Coordinates>>(null);
  const [error, setError] = useState<Nullable<Error>>(null);

  useEffect(() => {
    const savedCoords = localStorage.getItem<Coordinates>('coords');

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
        refreshCoords: () => refreshCoords(setCoords, setError),
      }}
    >
      {children}
    </CoordsContext.Provider>
  );
}

async function refreshCoords(
  setCoords: (coords: Nullable<Coordinates>) => void,
  setError: (error: Nullable<Error>) => void,
) {
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
