import { useState } from 'react';
import { useTodayHourlyData, useWeather } from 'hooks';
import TodayOverview from './TodayOverview';

import { SelectedTab } from './todayOverview.types';

function TodayOverviewContainer(): JSX.Element {
  const data = useTodayHourlyData();
  const { dailyData } = useWeather();

  const [selectedTab, setSelectedTab] = useState<SelectedTab>(SelectedTab.Conditions);

  return (
    <TodayOverview
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      {...data}
      sunriseTimeLocal={dailyData.sunriseTimeLocal[0]}
      sunsetTimeLocal={dailyData.sunsetTimeLocal[0]}
    />
  );
}

export default TodayOverviewContainer;
