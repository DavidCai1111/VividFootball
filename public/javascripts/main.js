$(function(){
    //绑定按钮
    $("#refresh").click(function(){
        refresh();
    });

    //定时刷新
    setInterval(refresh,10000);

    //刷新页面
    function refresh (){
        location.reload();
    }

});