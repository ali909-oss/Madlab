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

  const data = {
    labels: ["Sales", "Revenue", "Profit"], 
    data: [0.4, 0.6, 0.8]
  };
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 134, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
  };
  const SlaesStatus = () => {
    return (
      <ProgressChart
      data={data}
      width={wp('90%')}
      height={hp('40%')}
      strokeWidth={16}
      radius={32}
      chartConfig={chartConfig}
      hideLegend={false}
    />
    )}

export default SlaesStatus;