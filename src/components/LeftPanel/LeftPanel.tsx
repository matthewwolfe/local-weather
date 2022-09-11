import { Flex, Grid } from '@bedrock-ui/core';
import { Header } from 'components/Header';
import { WeekList } from 'components/WeekList';

function LeftPanel(): JSX.Element {
  return (
    <Grid.Col span={{ mobile: 12, tablet: 12, desktop: 7 }}>
      <Flex flexDirection="column" p={8}>
        <Header />
        <WeekList />
      </Flex>
    </Grid.Col>
  );
}

export default LeftPanel;
