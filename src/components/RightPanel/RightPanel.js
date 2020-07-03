import { Box } from '@material-ui/core';
import { TodayOverview } from '../TodayOverview';

function RightPanel() {
  return (
    <Box p={8} color="#fff" bgcolor="#0e092b" width={2 / 5} height="100vh">
      <TodayOverview />
    </Box>
  );
}

export default RightPanel;
