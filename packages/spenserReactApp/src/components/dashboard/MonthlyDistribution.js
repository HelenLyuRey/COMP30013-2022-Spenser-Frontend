import ReactECharts from "echarts-for-react";
import React from "react";


const MonthlyDistribution = (props) => {

  const monthly_income = props.monthly_income;
  const monthly_expense = props.monthly_expense;

  let monthly_income_nums = [];
  let monthly_expense_nums = [];

  if(monthly_income != undefined && monthly_income != null
    && monthly_expense != undefined && monthly_expense != null){
      Object.keys(monthly_income).map(function(key) {
        monthly_income_nums.push(monthly_income[key]);
      })
      Object.keys(monthly_expense).map(function(key) {
        monthly_expense_nums.push(monthly_expense[key]);
      })
  }else{
		monthly_income_nums.push({
			value: 0,
			name: "No value yet"
		});
    monthly_expense_nums.push({
			value: 0,
			name: "No value yet"
		});
	}
  

  // console.log(monthly_income_nums)

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
            data: monthly_income_nums,
          },
          {
            name: 'Spending',
            type: 'line',
            data: monthly_expense_nums,
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
