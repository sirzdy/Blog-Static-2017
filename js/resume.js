/**
 * Created by zdy on 2017/3/31.
 */
// $(".navigation").height($(".navigation").width());
"use strict";
$(window).on("resize",function () {
    $(".navigation").height($(".navigation").width());
})
$(window).resize();
$(".navigation tr th .th-block").on("click",function () {
    console.log($(this).attr("target"));
     var target=$(this).attr("target");
    $(".container").css({"left":"20px","top":"20px","transform": "scale(1e-10)"});
    $("section[id="+target+"]").fadeIn(1000);
    $(".btn-close").fadeIn(1000);
})
$(".btn-close").on("click",function () {
    $(".container").css({"left":"50%","top":"50%","transform": "translateX(-50%) translateY(-50%)"});
    $("section").fadeOut(1000);
    $(".btn-close").fadeOut(1000);
})
/*project 折叠状况*/
$("#project .panel .panel-heading").on("click",function () {
    $(this).parent().find(".panel-body").show();
    $(this).parent().siblings().find(".panel-body").hide();
})
$(".fa-qrcode").on("click",function () {
    $(this).siblings("img").toggle();
})
/*skillChart*/
$('#skillChart').highcharts({
    chart: {
        polar: true,
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: '技能熟练度蜘蛛图',
        align:'left',
        style:{
            color:'#000',
            fontSize: '18px',
            fontWeight:'bold'
        }
    },
    subtitle: {
        text: '使用HighCharts绘制',
        align:'left',
        style:{
            color:'#555',
            fontSize: '12px',
            fontWeight:'bold'
        }
    },
    pane: {
        size: '80%'
    },
    xAxis: {
        categories: ['前端', 'Java','Linux','C++', 'MySql','Duilib', 'PhotoShop','illustrator','Office'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 70
    },
    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },
    series: [{
        name: '熟练度',
        data: [85, 75, 70, 70, 75, 85,85,75,80],
        pointPlacement: 'on'
    }],
    credits: {
        text: ''
    },
});
/*webChart*/
var webChart = echarts.init(document.getElementById('webChart'));
var webOption = {
    title: {
        text: '前端技能熟练度柱形图',
        subtext: '使用Echarts绘制',
        textStyle:{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000'
        },
        subtextStyle:{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#444'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['熟练度(%)'],
        x:'right'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['正则表达式','Node.js','AngularJS','Bootstrap','jQuery','HTML','CSS','JavaScript']
    },
    series: [
        {
            name: '熟练度(%)',
            type: 'bar',
            data: [80,60,60,85, 85, 85, 85, 80],
            color:['#2eb8b3'],
        }
    ]
};
webChart.setOption(webOption);
$(document).ready(function(){
    $("#loading").fadeOut().remove();
})