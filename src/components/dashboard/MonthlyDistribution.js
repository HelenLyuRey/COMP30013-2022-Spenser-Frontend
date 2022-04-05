import ReactECharts from "echarts-for-react";
import React from "react";
import { useState, useEffect, useContext } from "react";
import conn from "../../util/conn";
import AuthContext from "../../context/auth-context";

const MonthlyDistribution = () => {

    let option = {
        title: {
          text: 'Monthly Distribution'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 
            'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '${value}'
          }
        },
        series: [
          {
            name: 'Income',
            type: 'line',
            data: [2000, 3000, 2500, 4000, 2000, 3000, 5000, 1000, 2000, 2500, 3200, 1900],
          },
          {
            name: 'Spending',
            type: 'line',
            data: [1500, 2000, 1800, 2030, 2000, 3450, 2000, 4000, 1000, 2000, 2410, 2300],
          }
        ]
      };

	return (
		<div>
			<ReactECharts option={option} />
		</div>
	);
};

export default MonthlyDistribution;
