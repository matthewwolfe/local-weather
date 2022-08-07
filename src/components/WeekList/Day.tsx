import { useBreakpoints } from '@bedrock-ui/breakpoints';
import { Flex, Grid, Text } from '@bedrock-ui/core';

interface Props {
  day: string;
  narrative: string;
  temperatureMax: number;
  temperatureMin: number;
}

function Day({ day, narrative, temperatureMax, temperatureMin }: Props): JSX.Element {
  const matches = useBreakpoints();

  return (
    <Grid style={{ paddingTop: 24 }}>
      <Grid.Col span={matches.desktop ? 8 : 12}>
        <Flex flexDirection="column">
          <Text>{day}</Text>
          <Text>{narrative}</Text>
        </Flex>
      </Grid.Col>

      <Grid.Col span={matches.desktop ? 4 : 12}>
        <Grid>
          <Grid.Col span={6}>
            <Flex justifyContent="center">
              {temperatureMax && <Text>{temperatureMax}&deg;F</Text>}
            </Flex>
          </Grid.Col>

          <Grid.Col span={6}>
            <Flex justifyContent="flex-end">
              <Text>{temperatureMin}&deg;F</Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}

export default Day;
