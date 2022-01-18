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
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 5) => `rgba(128,0,128, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
  };
  const Expenses = () => {
    return (
      <LineChart
      data={data}
      width={wp('100%')}
      height={(hp('50%'))}
      chartConfig={chartConfig}
    />
    )}

export default Expenses;