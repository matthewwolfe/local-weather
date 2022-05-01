import Box from '@mui/material/Box';
import { CoordsProvider } from 'components/CoordsProvider';
import { LeftPanel } from 'components/LeftPanel';
import { RightPanel } from 'components/RightPanel';
import { WeatherProvider } from 'components/WeatherProvider';

function App(): JSX.Element {
  return (
    <CoordsProvider>
      <WeatherProvider>
        <Box display="flex" flexDirection={['column-reverse', 'column-reverse', 'row']}>
          <LeftPanel />
          <RightPanel />
        </Box>
      </WeatherProvider>
    </CoordsProvider>
  );
}

export default App;
