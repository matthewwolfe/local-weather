import { HourlyData } from 'types/weather';

export enum SelectedTab {
  Conditions = 'conditions',
  Temperature = 'temperature',
}

export interface Props extends HourlyData {
  selectedTab: SelectedTab;
  setSelectedTab: (selectedTab: SelectedTab) => void;
  sunriseTimeLocal: string;
  sunsetTimeLocal: string;
}
