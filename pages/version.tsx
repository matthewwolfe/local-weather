import { Box } from '@bedrock-ui/core';
import packageJson from '../package.json';

function Version(): JSX.Element {
  return <Box p={2}>Version: {packageJson.version}</Box>;
}

export default Version;
