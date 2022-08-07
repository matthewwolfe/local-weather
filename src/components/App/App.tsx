import { Grid } from '@bedrock-ui/core';
import { CoordsProvider } from 'components/CoordsProvider';
import { LeftPanel } from 'components/LeftPanel';
import { RightPanel } from 'components/RightPanel';
import { WeatherProvider } from 'components/WeatherProvider';

function App(): JSX.Element {
  return (
    <CoordsProvider>
      <WeatherProvider>
        <Grid>
          <LeftPanel />
          <RightPanel />
        </Grid>
      </WeatherProvider>
    </CoordsProvider>
  );
}

export default App;
