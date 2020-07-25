import { Box, Button, Typography } from '@material-ui/core';

function Header({ address, refreshCoords }) {
  return (
    <Box
      display="flex"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      justifyContent="space-between"
      mb={6}
    >
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        textAlign={['center', 'center', 'left']}
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h3">
            <span style={{ fontWeight: 200 }}>Weather</span>{' '}
            <span style={{ fontWeight: 600 }}>Forecast</span>
          </Typography>

          {address && (
            <Typography variant="h6">
              {address.city}, {address.state}
            </Typography>
          )}
        </Box>
      </Box>

      <Box mb={[4, 4, 0]}>
        <Button
          color="primary"
          disableElevation
          fullWidth
          onClick={() => refreshCoords()}
          variant="outlined"
        >
          Refresh Location
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
