import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import { WeatherApiHourly } from 'types/weather';

interface Props
  extends Pick<
    WeatherApiHourly,
    'cloudCover' | 'precipChance' | 'relativeHumidity' | 'validTimeLocal'
  > {}

function ConditionsChart({
  cloudCover,
  precipChance,
  relativeHumidity,
  validTimeLocal,
}: Props): JSX.Element {
  const timeLabels: Array<string> = useMemo(
    () =>
      validTimeLocal.map((date: string) =>
        new Date(date).toLocaleString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        }),
      ),
    [validTimeLocal],
  );

  return (
    <Line
      type="line"
      data={{
        labels: timeLabels,
        datasets: [
          {
            backgroundColor: '#eeeeee',
            borderColor: '#eeeeee',
            data: cloudCover,
            fill: false,
            label: 'Cloud Cover',
            pointBackgroundColor: '#eeeeee',
            pointBorderColor: '#eeeeee',
            pointHoverBackgroundColor: '#eeeeee',
            pointHoverBorderColor: '#eeeeee',
            showLine: true,
          },
          {
            backgroundColor: '#55bae7',
            borderColor: '#55bae7',
            data: precipChance,
            fill: false,
            label: 'Precipitation',
            pointBackgroundColor: '#55bae7',
            pointBorderColor: '#55bae7',
            pointHoverBackgroundColor: '#55bae7',
            pointHoverBorderColor: '#55bae7',
            showLine: true,
          },
          {
            backgroundColor: '#556be7',
            borderColor: '#556be7',
            data: relativeHumidity,
            fill: false,
            label: 'Humidity',
            pointBackgroundColor: '#556be7',
            pointBorderColor: '#556be7',
            pointHoverBackgroundColor: '#556be7',
            pointHoverBorderColor: '#556be7',
            showLine: true,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                stepSize: 10,
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
          ],
        },
      }}
    />
  );
}

export default ConditionsChart;
