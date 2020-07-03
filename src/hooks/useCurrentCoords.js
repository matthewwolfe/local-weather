import { useContext } from 'react';
import { CoordsContext } from '../contexts';

function useCurrentCoords() {
  return useContext(CoordsContext);
}

export default useCurrentCoords;
