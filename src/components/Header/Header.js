import { Box, Button, Typography } from '@material-ui/core';

function Header({ address, refreshCoords }) {
  return (
    <Box
      display="flex"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      justifyContent="space-between"
      mb={6}
    >
      {console.log(address)}
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        textAlign={['center', 'center', 'left']}
      >
        <Typography variant="h3">
          <span style={{ fontWeight: 200 }}>Weather</span>{' '}
          <span style={{ fontWeight: 600 }}>Forecast</span>
        </Typography>
      </Box>

      <Box
        mb={[4, 4, 0]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Button
          color="primary"
          disableElevation
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
