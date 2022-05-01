import Box from '@mui/material/Box';
import { Header } from 'components/Header';
import { WeekList } from 'components/WeekList';

function LeftPanel(): JSX.Element {
  return (
    <Box p={8} width={[1, 1, 3 / 5]}>
      <Header />
      <WeekList />
    </Box>
  );
}

export default LeftPanel;
