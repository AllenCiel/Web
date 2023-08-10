var ec_right1 = echarts.init(document.getElementById('title7'),"dark");
var ec_right1_Option = {
	//标题样式
	title : {
	    text : "不安全行为实时动态",
	    textStyle : {
	        color : 'white',
			fontSize:15,
	    },
	    left : 'center',
		top : 'bottom',
	},
	  color: ['#3398DB'],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
    xAxis: {
        type: 'category',
		 color : 'white',
        data: ['不安全行为1', '不安全行为2']
    },
    yAxis: {
        type: 'value',
		 color : 'white',
    },
    series: [{
        data: [],
        type: 'bar',
		barMaxWidth:"50%"
    }]
};
ec_right1.setOption(ec_right1_Option)