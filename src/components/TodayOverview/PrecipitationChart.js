import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

function PrecipitationChart({ precipChance, validTimeLocal }) {
  const timeLabels = useMemo(
    () =>
      validTimeLocal.map((date) =>
        new Date(date).toLocaleTimeString('en-US', {
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
            backgroundColor: '#367ee9',
            label: 'Precipitation',
            data: precipChance,
            fill: true,
          },
        ],
      }}
      options={{
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

export default PrecipitationChart;
