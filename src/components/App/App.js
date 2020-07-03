import { Box } from '@material-ui/core';
import { LeftPanel } from '../LeftPanel';
import { RightPanel } from '../RightPanel';
import { WeatherProvider } from '../WeatherProvider';

function App() {
  return (
    <WeatherProvider>
      <Box height="100vh" display="flex">
        <LeftPanel />
        <RightPanel />
      </Box>
    </WeatherProvider>
  );
}

export default App;
