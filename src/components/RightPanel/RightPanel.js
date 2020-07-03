import { Box } from '@material-ui/core';
import { TodayOverview } from '../TodayOverview';

function RightPanel() {
  return (
    <Box
      bgcolor="#0e092b"
      color="#fff"
      height="100vh"
      p={8}
      width={[1, 1, 2 / 5]}
    >
      <TodayOverview />
    </Box>
  );
}

export default RightPanel;
