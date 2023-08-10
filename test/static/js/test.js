var ectest = echarts.init(document.getElementById('title7'), "dark");
var option = {
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [
		{
		  data: [150, 230, 1224, 218, 135, 147, 260],
		  type: 'line'
		}
	]
	};
ectest.setOption(option)