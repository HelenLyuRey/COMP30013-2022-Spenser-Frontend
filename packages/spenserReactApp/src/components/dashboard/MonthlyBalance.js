import ReactECharts from "echarts-for-react";
import React from "react";
import { useState, useEffect, useContext } from "react";
import conn from "../../util/conn";
import AuthContext from "../../context/auth-context";

const MonthlyBalance = (props) => {

  const monthly_balance = props.monthly_balance;

  let monthly_balance_nums = [];

  if(monthly_balance != undefined && monthly_balance != null){
    Object.keys(monthly_balance).map(function(key) {
      monthly_balance_nums.push(monthly_balance[key]);
    })
  }else{
		monthly_balance_nums.push({
			value: 0,
			name: "No value yet"
		});
	}
  
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
            data: monthly_balance_nums.reverse()
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
