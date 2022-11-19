import { Box, Flex, Heading, Tabs, Text } from '@bedrock-ui/core';
import dayjs from 'dayjs';
import { ConditionsChart } from 'components/ConditionsChart';
import { TemperatureChart } from 'components/TemperatureChart';

import { Props, SelectedTab } from './todayOverview.types';

function TodayOverview({
  cloudCover,
  precipChance,
  relativeHumidity,
  selectedTab,
  setSelectedTab,
  sunriseTimeLocal,
  sunsetTimeLocal,
  temperature,
  validTimeLocal,
  windSpeed,
  wxPhraseLong,
}: Props): JSX.Element {
  const currentTemperature = temperature[0];

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      p={8}
      style={{ height: 'calc(100% - 64px)' }}
    >
      <Box mt={8}>
        <Box mb={5} style={{ textAlign: 'center' }}>
          <Heading color="white" level={4}>
            Today
          </Heading>

          <Text color="white">
            {new Date().toLocaleString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </Box>

        <Box style={{ textAlign: 'center' }}>
          <Heading color="white" level={1}>
            {currentTemperature}&deg;
          </Heading>

          <Heading color="white" level={6}>
            {wxPhraseLong}
          </Heading>

          <Text color="white">Wind: {windSpeed}mph</Text>

          <Box mt={4}>
            <Text color="white">
              Daylight Hours {dayjs(sunriseTimeLocal).format('h:mma')} -{' '}
              {dayjs(sunsetTimeLocal).format('h:mma')}
            </Text>
          </Box>
        </Box>
      </Box>

      <Flex justifyContent="center" style={{ width: '100%' }}>
        <Tabs>
          <Tabs.Tab
            active={selectedTab === SelectedTab.Conditions}
            onClick={() => setSelectedTab(SelectedTab.Conditions)}
          >
            <Text color="white">Conditions</Text>
          </Tabs.Tab>

          <Tabs.Tab
            active={selectedTab === SelectedTab.Temperature}
            onClick={() => setSelectedTab(SelectedTab.Temperature)}
          >
            <Text color="white">Temperature</Text>
          </Tabs.Tab>
        </Tabs>
      </Flex>

      <Box style={{ height: '50vh', width: '100%' }}>
        {selectedTab === SelectedTab.Conditions && (
          <ConditionsChart
            cloudCover={cloudCover}
            precipChance={precipChance}
            relativeHumidity={relativeHumidity}
            validTimeLocal={validTimeLocal}
          />
        )}

        {selectedTab === SelectedTab.Temperature && (
          <TemperatureChart temperature={temperature} validTimeLocal={validTimeLocal} />
        )}
      </Box>
    </Flex>
  );
}

export default TodayOverview;
