import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
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
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
      <Box mt={10}>
        <Box textAlign="center" mb={5}>
          <Typography variant="h4">Today</Typography>
          <Typography variant="subtitle1">
            {new Date().toLocaleString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="h1">{currentTemperature}&deg;</Typography>
          <Typography variant="h6">{wxPhraseLong}</Typography>
          <Typography variant="body2">Wind: {windSpeed}mph</Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" width={1}>
        <Tabs
          onChange={(e, newSelectedTab: SelectedTab) => {
            setSelectedTab(newSelectedTab);
          }}
          value={selectedTab}
        >
          <Tab label="Conditions" value="conditions" />
          <Tab label="Temperature" value="temperature" />
        </Tabs>
      </Box>

      <Box height="40vh" width={1}>
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
    </Box>
  );
}

export default TodayOverview;
