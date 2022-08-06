import { useBreakpoints } from '@bedrock-ui/breakpoints';
import { Flex } from '@bedrock-ui/core';
import { CoordsProvider } from 'components/CoordsProvider';
import { LeftPanel } from 'components/LeftPanel';
import { RightPanel } from 'components/RightPanel';
import { WeatherProvider } from 'components/WeatherProvider';

function App(): JSX.Element {
  const matches = useBreakpoints();

  return (
    <CoordsProvider>
      <WeatherProvider>
        <Flex flexDirection={matches.desktop ? 'column-reverse' : undefined}>
          <LeftPanel />
          <RightPanel />
        </Flex>
      </WeatherProvider>
    </CoordsProvider>
  );
}

export default App;
