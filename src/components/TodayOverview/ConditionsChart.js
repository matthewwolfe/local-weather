import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

function ConditionsChart({ precipChance, relativeHumidity, validTimeLocal }) {
  const timeLabels = useMemo(
    () =>
      validTimeLocal.map((date) =>
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
