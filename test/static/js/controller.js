function gettime(){
    $.ajax({
        url:'/time',
        timeout:10000,
        success:function(data){
            $('#tim').html(data)
        },error:function(xhr,type,errorThrown){

        }
    });
}
function get_t2_data(){
    $.ajax({
        url:'/t2',
        success:function(data) {
            $('.num h1').eq(0).text(data.d1);
            $('.num h1').eq(1).text(data.d2);
            $('.num h1').eq(2).text(data.d3);
        },error:function(xhr,type,errorThrown){

        }
    })
}

function get_t8_data(){
    $.ajax({
        url:'/t8',
        success:function(data) {
			ec_left1_Option.xAxis[0].data=data.day;
			ec_left1_Option.series[0].data=data.d1;
			ec_left1_Option.series[1].data=data.d2;
            ec_left1.setOption(ec_left1_Option)
        },error:function(xhr,type,errorThrown){

        }
    })
}

function get_t7_data(){
    $.ajax({
        url:'/t7',
        success:function(data) {
			ec_right1_Option.series[0].data=data.d1;
            ec_right1.setOption(ec_right1_Option)
        },error:function(xhr,type,errorThrown){

        }
    })
}
// get_t7_data()
// get_t8_data()
// get_t2_data()
// gettime()
setInterval(get_t7_data, 1000)
setInterval(get_t8_data, 1000)
setInterval(get_t2_data, 1000)/* 毫秒*/
setInterval(gettime, 1000)