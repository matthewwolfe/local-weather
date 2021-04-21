import { Box } from '@material-ui/core';
import packageJson from '../package.json';

function Version() {
  return <Box p={2}>Version: {packageJson.version}</Box>;
}

export default Version;
