import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import { WeatherApiHourly } from 'types/weather';

interface Props extends Pick<WeatherApiHourly, 'temperature' | 'validTimeLocal'> {}

function TemperatureChart({ temperature, validTimeLocal }: Props): JSX.Element {
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
      data={{
        labels: timeLabels,
        datasets: [
          {
            backgroundColor: '#eeeeee',
            borderColor: '#eeeeee',
            data: temperature,
            fill: false,
            label: 'Temperature',
            pointBackgroundColor: '#eeeeee',
            pointBorderColor: '#eeeeee',
            pointHoverBackgroundColor: '#eeeeee',
            pointHoverBorderColor: '#eeeeee',
            showLine: true,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        scales: {
          y: {
            suggestedMin: Math.min(...temperature) - 5,
            suggestedMax: Math.max(...temperature) + 5,
            ticks: {
              stepSize: 2,
            },
          },
        },
      }}
    />
  );
}

export default TemperatureChart;
