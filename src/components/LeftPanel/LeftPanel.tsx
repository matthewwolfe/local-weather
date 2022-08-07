import { useBreakpoints } from '@bedrock-ui/breakpoints';
import { Flex, Grid } from '@bedrock-ui/core';
import { Header } from 'components/Header';
import { WeekList } from 'components/WeekList';

function LeftPanel(): JSX.Element {
  const { sx } = useBreakpoints();

  return (
    <Grid.Col span={sx({ mobile: 12, tablet: 12, desktop: 7 })}>
      <Flex flexDirection="column" p={8}>
        <Header />
        <WeekList />
      </Flex>
    </Grid.Col>
  );
}

export default LeftPanel;
