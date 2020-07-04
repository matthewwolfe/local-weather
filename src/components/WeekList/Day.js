import { Box, MenuItem, Typography } from '@material-ui/core';

function Day({ day, narrative, temperatureMax, temperatureMin }) {
  return (
    <Box display="flex" pt={6} flexDirection={['column', 'column', 'row']}>
      <Box width={[1, 1, 2 / 3]}>
        <Typography variant="body1">{day}</Typography>
        <Typography variant="body2">{narrative}</Typography>
      </Box>

      <Box
        display={['flex', 'flex', 'box']}
        mt={[4, 4, 0]}
        width={[1, 1, 1 / 3]}
      >
        <Box width={[1, 1, 1 / 2]} textAlign={['left', 'left', 'center']}>
          {temperatureMax && (
            <Typography variant="body1">{temperatureMax}&deg;F</Typography>
          )}
        </Box>
        <Box width={[1, 1, 1 / 2]} textAlign={['left', 'left', 'center']}>
          <Typography variant="body1">{temperatureMin}&deg;F</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Day;
