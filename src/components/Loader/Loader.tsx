import { Flex, Heading } from '@bedrock-ui/core';

function Loader(): JSX.Element {
  return (
    <Flex justifyContent="center" p={10} style={{ width: '100%' }}>
      <Heading level={4}>Loading...</Heading>
    </Flex>
  );
}

export default Loader;
