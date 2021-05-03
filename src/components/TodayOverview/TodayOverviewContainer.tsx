import { useState } from 'react';
import { useTodayHourlyData } from 'hooks';
import TodayOverview from './TodayOverview';

import { SelectedTab } from './todayOverview.types';

function TodayOverviewContainer(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>(SelectedTab.Conditions);
  const data = useTodayHourlyData();

  return <TodayOverview selectedTab={selectedTab} setSelectedTab={setSelectedTab} {...data} />;
}

export default TodayOverviewContainer;
