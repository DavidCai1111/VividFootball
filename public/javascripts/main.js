$(function(){
    //绑定按钮
    $("#refresh").click(function(){
        refresh();
    });

    ////定时刷新
    ////setInterval(refresh,10000);
    //
    ////刷新页面
    //function refresh (){
    //    location.reload();
    //}

    //邮件订阅
    $("#submitEmail").click(function(e){
        e.preventDefault();
        email = $("#email").val();
        $.ajax({
            type:"POST",
            url:"/mail/subscribe",
            data: JSON.stringify(email),
            dataType:"json",
            success:function(msg){
                if(msg.result){
                    $("#subscribeInfo").text("订阅成功!").show();
                }
            }
        })
    });

});