import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Loader(): JSX.Element {
  return (
    <Box p={10} textAlign="center" width={1}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
