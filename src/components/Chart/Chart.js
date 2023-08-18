import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((data) => data.value);
  const maxValue = Math.max(...dataPointsValue);

  return (
    <div className="chart-container">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maxValue}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
