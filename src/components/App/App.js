import { Box } from '@material-ui/core';
import { CoordsProvider } from '../CoordsProvider';
import { LeftPanel } from '../LeftPanel';
import { RightPanel } from '../RightPanel';
import { WeatherProvider } from '../WeatherProvider';

function App() {
  return (
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
  );
}

export default App;
