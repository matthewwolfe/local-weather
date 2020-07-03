import { Box } from '@material-ui/core';
import { Header } from '../Header';
import { WeekList } from '../WeekList';

function LeftPanel() {
  return (
    <Box p={8} width={3 / 5}>
      <Header />
      <WeekList />
    </Box>
  );
}

export default LeftPanel;
