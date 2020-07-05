import TodayOverview from './TodayOverview';
import { useTodayHourlyData } from '../../hooks';

function TodayOverviewContainer() {
  const data = useTodayHourlyData();

  console.log(data);

  return <TodayOverview {...data} />;
}

export default TodayOverviewContainer;
