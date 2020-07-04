import { Box } from '@material-ui/core';
import { AppProvider } from '../AppProvider';
import { CoordsProvider } from '../CoordsProvider';
import { LeftPanel } from '../LeftPanel';
import { RightPanel } from '../RightPanel';
import { WeatherProvider } from '../WeatherProvider';

function App() {
  return (
    <AppProvider>
      <CoordsProvider>
        <WeatherProvider>
          <Box
            display="flex"
            flexDirection={['column-reverse', 'column-reverse', 'row']}
          >
            <LeftPanel />
            <RightPanel />
          </Box>
        </WeatherProvider>
      </CoordsProvider>
    </AppProvider>
  );
}

export default App;
