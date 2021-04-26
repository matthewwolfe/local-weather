import { Box, Typography } from '@material-ui/core';

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
