import TodayOverview from './TodayOverview';
import { useTodayHourlyData } from '../../hooks';

function TodayOverviewContainer() {
  const data = useTodayHourlyData();

  return <TodayOverview {...data} />;
}

export default TodayOverviewContainer;
