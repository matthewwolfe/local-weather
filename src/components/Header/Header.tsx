import { Button, Flex, Heading } from '@bedrock-ui/core';

import { Address } from 'types/geolocation';

interface Props {
  address: Address;
  refreshCoords: () => void;
}

function Header({ address, refreshCoords }: Props): JSX.Element {
  return (
    <Flex justifyContent="space-between" mb={6}>
      <Flex flexDirection="column">
        <Heading level={3}>
          <span style={{ fontWeight: 200 }}>Weather</span>{' '}
          <span style={{ fontWeight: 600 }}>Forecast</span>
        </Heading>

        {address && (
          <Heading level={6}>
            {address.city}, {address.state}
          </Heading>
        )}
      </Flex>

      <Flex mb={4}>
        <Button color="primary" onClick={() => refreshCoords()} variant="outlined">
          Refresh Location
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
