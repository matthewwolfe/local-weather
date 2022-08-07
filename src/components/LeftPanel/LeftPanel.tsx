import { useBreakpoints } from '@bedrock-ui/breakpoints';
import { Flex, Grid } from '@bedrock-ui/core';
import { Header } from 'components/Header';
import { WeekList } from 'components/WeekList';

function LeftPanel(): JSX.Element {
  const matches = useBreakpoints();

  return (
    <Grid.Col span={matches.desktop ? 7 : 12}>
      <Flex flexDirection="column" p={8}>
        <Header />
        <WeekList />
      </Flex>
    </Grid.Col>
  );
}

export default LeftPanel;
