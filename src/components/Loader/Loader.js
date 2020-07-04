import { Box, CircularProgress } from '@material-ui/core';

function Loader() {
  return (
    <Box p={10} textAlign="center" width={1}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
