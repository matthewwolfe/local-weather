import { useTodayHourlyData } from 'hooks';
import TodayOverview from './TodayOverview';

function TodayOverviewContainer(): JSX.Element {
  const data = useTodayHourlyData();

  return <TodayOverview {...data} />;
}

export default TodayOverviewContainer;
