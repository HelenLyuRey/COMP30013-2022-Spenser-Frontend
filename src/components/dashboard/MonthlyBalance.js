import ReactECharts from "echarts-for-react";
import React from "react";
import { useState, useEffect, useContext } from "react";
import conn from "../../util/conn";
import AuthContext from "../../context/auth-context";

const MonthlyBalance = () => {

    let option = {
        title: {
          text: 'Monthly Balance'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 80,
          bottom: 30
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'July', 
                'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan', ]
        },
        series: [
          {
            name: 'Balance',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              formatter: '{b}'
            },
            data: [500, 1000, 700, 1970, 0, -450, 3000, -3000, 1000, 500, 790, -400]
          }
        ]
      };

	return (
		<div>
			<ReactECharts option={option} />
		</div>
	);
};

export default MonthlyBalance;
