import ReactECharts from "echarts-for-react";
import React from "react";
import { useState, useEffect, useContext } from "react";
import conn from "../../util/conn";
import AuthContext from "../../context/auth-context";

const EntityDistribution = () => {
	let option = {
		title: {
		  text: 'Spending Distribution',
		  left: 'center'
		},
		tooltip: {
		  trigger: 'item'
		},
		legend: {
		  orient: 'vertical',
		  left: 'right',
		  top: 'center'
		},
		series: [
		  {
			name: 'Category',
			type: 'pie',
			radius: '70%',
			label: {
				formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
				backgroundColor: '#F6F8FC',
				borderColor: '#8C8D8E',
				borderWidth: 1,
				borderRadius: 4,
				rich: {
				  a: {
					color: '#6E7079',
					lineHeight: 22,
					align: 'center'
				  },
				  hr: {
					borderColor: '#8C8D8E',
					width: '100%',
					borderWidth: 1,
					height: 0
				  },
				  b: {
					color: '#4C5058',
					fontSize: 14,
					fontWeight: 'bold',
					lineHeight: 33
				  },
				  per: {
					color: '#fff',
					backgroundColor: '#4C5058',
					padding: [3, 4],
					borderRadius: 4
				  }
				}
			  },
			data: [
				{ value: 1000, name: "Food" },
				{ value: 300, name: "Drink" },
				{ value: 150, name: "Transport" },
				{ value: 300, name: "Fresh Produce"},
				{ value: 500, name: "Grocery" },
			],
			emphasis: {
			  itemStyle: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			  }
			}
		  }
		]
	  };

	return (
		<div>
			<ReactECharts option={option} />
		</div>
	);
};

export default EntityDistribution;
