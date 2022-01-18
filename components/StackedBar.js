import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    LineChart,View,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,graphStyle
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";

  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Sales", "Profit"],
    legend: ["Month 1", "Month 2", "Month 3"],
    data: [
      [60, 60, 60],
      [30, 30, 60]
    ],
    barColors: ["red", "lightgreen", "lightblue"]
  };
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0.5) => `rgba(255,0,0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  
  const Stackbar = () => {
    return (
        <StackedBarChart
  style={graphStyle}
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
    )}

export default Stackbar;