import { useState } from 'react';
import { AppContext } from '../../contexts';

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
