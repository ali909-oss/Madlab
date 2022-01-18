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
    color: (opacity = 10) => `rgba(255,0,0, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 1,
  };
  const Summary = () => {
    return (
        <BarChart
        style={graphStyle}
        data={data}
        width={wp('90%')}
        height={hp('50%')}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={20}
        
      />
    )}

export default Summary;