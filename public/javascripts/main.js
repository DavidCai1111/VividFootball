$(function(){
    //隐藏邮件发送信息提示
    $("#subscribeInfo").hide();

    //绑定按钮
    $("#refresh").click(function(){
        refresh();
    });

    //刷新页面
    function refresh (){
        location.reload();
    }

    //邮件订阅
    $("#submitEmail").click(function(e){
        var email = $("#email").val();
        if(!isEmail(email)){
            $("#subscribeInfo").text("输入的email格式有误");
            $("#subscribeInfo").fadeIn();
            return ;
        }
        var league = location.pathname;
        //默认为英超联赛
        if(league === "/"){
            league = "/rank/England";
        }
        e.preventDefault();
        $("#subscribeInfo").text("发送中...");
        $("#subscribeInfo").fadeIn();

        email = {
            email : email
        };
        $.ajax({
            type:"POST",
            url:"/mail/subscribe" + league,
            contentType: 'application/json',
            data: JSON.stringify(email),
            dataType:"json",
            success:function(msg){
                if(msg.result){
                    $("#subscribeInfo").text("发送成功!");
                }else{
                    $("#subscribeInfo").text("发送失败!");
                }
            }
        })
    });

    function isEmail(str){
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        return reg.test(str);
    }

});