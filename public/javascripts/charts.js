
require.config({
    paths: {
        echarts:'/javascripts/echarts/dist'
    }
});
//净胜球数
require(
    [
        'echarts',
        'echarts/chart/pie' //按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('intePerGame'));

        option = {
            title : {
                text: '联赛球队场均获得积分',
                subtext: '各球队分布',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:namesOfTeams
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: true},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'场均积分',
                    type:'pie',
                    radius : [30, 110],
                    center : ['50%', 200],
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:intePerGame
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);

//进球，失球数
require(
    [
        'echarts',
        'echarts/chart/radar' //按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('goals'));

        option = {
            title : {
                text: '进球数 vs 失球数',
                subtext: '各球队分布'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                y : 'bottom',
                data:['进球数','失球数']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: true},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            polar : [
                {
                    indicator : (function(){
                        var _nameOfTeams = [];
                        for(var i = 0 ; i < namesOfTeams.length ; i ++){
                            _nameOfTeams.push({text:namesOfTeams[i],max:100});
                        }
                        return _nameOfTeams;
                    }())
                }
            ],
            calculable : true,
            series : [
                {
                    name: '进球数 vs 失球数',
                    type: 'radar',
                    data : [
                        {
                            value : goalsPerTeam,
                            name : '进球数'
                        },
                        {
                            value : fumblePerTeam,
                            name : '失球数'
                        }
                    ]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);

//胜平负
require(
    [
        'echarts',
        'echarts/chart/bar' //按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('winLostDraw'));

        option = {
            title : {
                text: '胜平负',
                subtext: '各球队分布'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['负', '平','胜']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: true},
                    magicType : {show: true, type: [  'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : namesOfTeams.reverse()
                }
            ],
            series : [
                {
                    name:'负',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: lostPerTeam.reverse()
                },
                {
                    name:'平',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:drawPerTeam.reverse()
                },
                {
                    name:'胜',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:winPerTeam.reverse()
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);

//每净胜球获得积分
require(
    [
        'echarts',
        'echarts/chart/bar' //按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('diffGoalPerinte'));

        var labelRight = {normal: {label : {position: 'right'}}};

        option = {
            title: {
                text: '每净胜球获得积分',
                subtext: '各球队分布'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            grid: {
                y: 80,
                y2: 30
            },
            xAxis : [
                {
                    type : 'value',
                    position: 'top',
                    splitLine: {lineStyle:{type:'dashed'}},
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    data : namesOfTeams.reverse()
                }
            ],
            series : [
                {
                    name:'每净胜球获得积分',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {
                        color: 'orange',
                        borderRadius: 5,
                        label : {
                            show: true,
                            position: 'left',
                            formatter: '{b}'
                        }
                    }},
                    data:(function(){
                        var _diffGoalPerinte = [];
                        for(var i = 0 ; i < diffGoalPerinte.length ; i++){
                            if(diffGoalPerinte[i] < 0){
                                _diffGoalPerinte.push({value:diffGoalPerinte[i],itemStyle:labelRight})
                            }else{
                                _diffGoalPerinte.push(diffGoalPerinte[i]);
                            }
                        }
                        return _diffGoalPerinte.reverse();
                    }())
                }
            ]
        };



        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);

