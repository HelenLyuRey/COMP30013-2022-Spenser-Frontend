import ReactECharts from "echarts-for-react";
import React from "react";

const CategoryDistribution = (props) => {
	const category = props.category; // all category object
	// console.log(category)
	let data = []

	if(category != undefined && category != null){
		Object.keys(category).map(function(key) {
			data.push({
			  value: category[key],
			  name: key
			  });
		});
	}
	else{
		data.push({
			value: 0,
			name: "No value yet"
		});
	}
	
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
			data: data,
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

export default CategoryDistribution;
