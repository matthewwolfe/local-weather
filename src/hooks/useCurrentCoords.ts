import { useContext } from 'react';
import { ICoordsContext, CoordsContext } from 'contexts';

function useCurrentCoords(): ICoordsContext {
  return useContext(CoordsContext);
}

export default useCurrentCoords;
