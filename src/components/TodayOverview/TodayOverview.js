import { useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import PrecipitationChart from './PrecipitationChart';

function TodayOverview({ day, precipChance, temperature, validTimeLocal }) {
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
        </Box>
      </Box>

      <Box width={1}>
        <PrecipitationChart
          precipChance={precipChance}
          validTimeLocal={validTimeLocal}
        />
      </Box>
    </Box>
  );
}

export default TodayOverview;
