import { useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import ConditionsChart from './ConditionsChart';

function TodayOverview({
  cloudCover,
  day,
  precipChance,
  relativeHumidity,
  temperature,
  validTimeLocal,
  windSpeed,
  wxPhraseLong,
}) {
  const currentTemperature = temperature[0];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
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

      <Box height="40vh" width={1}>
        <ConditionsChart
          cloudCover={cloudCover}
          precipChance={precipChance}
          relativeHumidity={relativeHumidity}
          validTimeLocal={validTimeLocal}
        />
      </Box>
    </Box>
  );
}

export default TodayOverview;
