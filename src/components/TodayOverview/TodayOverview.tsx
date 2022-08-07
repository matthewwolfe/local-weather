import { Box, Flex, Heading, Tabs, Text } from '@bedrock-ui/core';
import { ConditionsChart } from 'components/ConditionsChart';
import { TemperatureChart } from 'components/TemperatureChart';

import { Props, SelectedTab } from './todayOverview.types';

function TodayOverview({
  cloudCover,
  precipChance,
  relativeHumidity,
  selectedTab,
  setSelectedTab,
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
      <Box mt={10}>
        <Box mb={5} style={{ textAlign: 'center' }}>
          <Heading level={4} style={{ color: '#FFFFFF' }}>
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
          <Heading level={1} style={{ color: '#FFFFFF' }}>
            {currentTemperature}&deg;
          </Heading>

          <Heading level={6} style={{ color: '#FFFFFF' }}>
            {wxPhraseLong}
          </Heading>

          <Text color="white">Wind: {windSpeed}mph</Text>
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

      <Box style={{ height: '40vh', width: '100%' }}>
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
