import { useBreakpoints } from '@bedrock-ui/breakpoints';
import { Box, Grid } from '@bedrock-ui/core';
import { TodayOverview } from 'components/TodayOverview';

function RightPanel(): JSX.Element {
  const matches = useBreakpoints();

  return (
    <Grid.Col span={matches.desktop ? 5 : 12}>
      <Box style={{ backgroundColor: '#0e092b', color: '#fff', height: '100vh' }}>
        <TodayOverview />
      </Box>
    </Grid.Col>
  );
}

export default RightPanel;
