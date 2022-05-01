import Box from '@mui/material/Box';
import { TodayOverview } from 'components/TodayOverview';

function RightPanel(): JSX.Element {
  return (
    <Box bgcolor="#0e092b" color="#fff" height="100vh" p={8} width={[1, 1, 2 / 5]}>
      <TodayOverview />
    </Box>
  );
}

export default RightPanel;
