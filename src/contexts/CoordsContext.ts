import { createContext } from 'react';

import { Coordinates } from 'types/geolocation';

export interface ICoordsContext {
  coords: Coordinates;
  refreshCoords: () => void;
}

const CoordsContext = createContext<Nullable<ICoordsContext>>(null);

export default CoordsContext;
