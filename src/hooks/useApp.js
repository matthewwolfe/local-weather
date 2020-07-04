import { useContext } from 'react';
import { AppContext } from '../contexts';

function useApp() {
  return useContext(AppContext);
}

export default useApp;
