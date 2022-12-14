import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement
} from "chart.js";
import { Line } from "react-chartjs-2";

import dayjs from "../../../lib/dayjs";
import useCurrentWeather from "../../../lib/hooks/useCurrentWeather";
import useWeatherForecast from "../../../lib/hooks/useWeatherForecast";

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement
);

const WeatherChart = () => {
  const { current } = useCurrentWeather();
  const { forecast } = useWeatherForecast();

  if (!current || !forecast) {
    return (
      <div className="h-full min-h-[170px] w-full rounded bg-gray-900/50"></div>
    );
  }

  let timestamps = [dayjs().format("HH:mm")];
  let temperatures = [current.main.temp];

  forecast?.list.forEach((item) => {
    timestamps.push(dayjs.unix(item.dt).format("HH:mm"));
    temperatures.push(item.main.temp);
  });

  const data: ChartData<"line"> = {
    labels: timestamps,
    datasets: [
      {
        backgroundColor: "rgb(110 242 255 / 0.075)",
        borderColor: "rgb(110 242 255 / 0.75)",
        borderWidth: 1.5,
        data: temperatures,
        fill: true,
        pointBorderColor: "rgb(110 242 255)",
        pointStyle: "rectRot",
        pointRadius: 5,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    devicePixelRatio: 2,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgb(110 242 255 / 0.125)",
          borderColor: "rgb(110 242 255 / 0.5)",
          borderWidth: 2,
        },
        ticks: {
          color: "rgb(161 161 170)", // text-gray-400
        },
      },
      y: {
        grid: {
          color: "rgb(110 242 255 / 0.125)",
        },
        suggestedMin: Math.min(...temperatures) - 2,
        suggestedMax: Math.max(...temperatures) + 2,
        ticks: {
          callback: function (value) {
            return `${value}??`;
          },
          color: "rgb(161 161 170)", // text-gray-400
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="relative h-full min-h-[170px] w-full overflow-hidden">
      <Line data={data} options={options} width="100%" height="170px" />
    </div>
  );
};

export default WeatherChart;
