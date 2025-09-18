import React from "react";
import { LineChart } from "react-native-chart-kit";

const OptimizedChart = React.memo(({ data }) => {
  return (
    <LineChart
      data={data}
      width={300}
      height={200}
      chartConfig={{
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        color: () => `#3b82f6`,
      }}
    />
  );
});

export default OptimizedChart;
