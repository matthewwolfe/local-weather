import { Box, Typography } from '@material-ui/core';

function Header() {
  return (
    <Box display="flex" mb={6} flexDirection={['column', 'row']}>
      <Box mr={2}>
        <Typography variant="h3" style={{ fontWeight: 200 }}>
          Weather
        </Typography>
      </Box>

      <Typography variant="h3" style={{ fontWeight: 600 }}>
        Forecast
      </Typography>
    </Box>
  );
}

export default Header;
