import ReactECharts from "echarts-for-react";
import React from "react";

const CategoryDistribution = (props) => {
	const category_json = props.category; // all category object
	let title_text = 'Spending distribution';
	let series_name = 'Category'
	
	// console.log(category)
	let data = []

	if(category_json !== undefined && category_json !== null){
		const all_categories = Object.keys(category_json)
		all_categories.forEach(function(category){
			// Do not show the categories which 0 expense
			if (category_json[category] === 0){
				delete category_json[category]
			}
		})
		Object.keys(category_json).map(function(key) {
			let key_cap = ''
			// Getting rid of the underscore in the name
			if(key.includes('_')){
				const entity_space = key.split('_').join(' ')
				key_cap = entity_space.charAt(0).toUpperCase() + entity_space.slice(1);
			} else{
				key_cap = key.charAt(0).toUpperCase() + key.slice(1);
			}
			data.push({
			  value: category_json[key],
			  name: key_cap
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
		  text: props.title_text,
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
			name: props.series_name,
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
