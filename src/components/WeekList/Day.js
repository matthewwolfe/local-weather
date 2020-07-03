import { Box, MenuItem, Typography } from '@material-ui/core';

function Day({ day, narrative, temperatureMax, temperatureMin }) {
  return (
    <Box display="flex" pt={6}>
      <Box width={1 / 2}>
        <Typography variant="body1">{day}</Typography>
        <Typography variant="body2">{narrative}</Typography>
      </Box>
      <Box width={1 / 4} textAlign="center">
        {temperatureMax && (
          <Typography variant="body1">{temperatureMax}&deg;F</Typography>
        )}
      </Box>
      <Box width={1 / 4} textAlign="center">
        <Typography variant="body1">{temperatureMin}&deg;F</Typography>
      </Box>
    </Box>
  );
}

export default Day;
