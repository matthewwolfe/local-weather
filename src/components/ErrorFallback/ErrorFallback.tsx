import { Box, Heading } from '@bedrock-ui/core';

function ErrorFallback(): JSX.Element {
  return (
    <Box p={5}>
      <Heading level={4}>
        Something went wrong. Either the API could not be reached, or permission to access location
        was not granted.
      </Heading>
    </Box>
  );
}

export default ErrorFallback;
