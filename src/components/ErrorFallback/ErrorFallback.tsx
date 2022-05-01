import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ErrorFallback(): JSX.Element {
  return (
    <Box p={5}>
      <Typography variant="h4">
        Something went wrong. Either the API could not be reached, or permission to access location
        was not granted.
      </Typography>
    </Box>
  );
}

export default ErrorFallback;
