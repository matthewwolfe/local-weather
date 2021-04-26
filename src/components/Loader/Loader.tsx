import { Box, CircularProgress } from '@material-ui/core';

function Loader(): JSX.Element {
  return (
    <Box p={10} textAlign="center" width={1}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
