var ec_title9 = echarts.init(document.getElementById('title9'), "dark");
var ec_title9_Option = {
  title: {
    text: '操作人员健康指标',
	top:'bottom',
	left:'center',
	textStyle: {
		//color: 'white',
		fontSize:15,
	},
  },
  legend: {
    data: ['员工1', '员工2'],
	left:'right',
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'metric1', max: 6500 },
      { name: 'metric2', max: 16000 },
      { name: 'metric3', max: 30000 },
      { name: 'metric4', max: 38000 },
      { name: 'metric5', max: 52000 },
      { name: 'metric6', max: 25000 }
    ],
	radius: '55%',
  },
  series: [
    {
      // name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '员工1'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '员工2'
        }
      ]
    }
  ]
};

ec_title9.setOption(ec_title9_Option)